import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';

@Injectable()
export class SubscriptionService {
  constructor(private prisma: PrismaService) {}

  async create(createSubscriptionDto: CreateSubscriptionDto) {
    // Verifica se já existe uma assinatura com este CPF
    const existingSubscription = await this.prisma.subscription.findUnique({
      where: { cpf: createSubscriptionDto.cpf },
    });

    if (existingSubscription) {
      throw new ConflictException('Já existe uma assinatura cadastrada com este CPF');
    }

    // Processa o número do cartão (armazena apenas últimos 4 dígitos)
    let cardNumberLast4 = null;
    if (createSubscriptionDto.cardNumber) {
      const cardNumber = createSubscriptionDto.cardNumber.replace(/\s/g, '');
      cardNumberLast4 = cardNumber.slice(-4);
    }

    // Cria a assinatura
    const subscription = await this.prisma.subscription.create({
      data: {
        cpf: createSubscriptionDto.cpf,
        planType: createSubscriptionDto.planType,
        planValue: parseFloat(createSubscriptionDto.planValue),
        email: createSubscriptionDto.email,
        name: createSubscriptionDto.name,
        birthdate: createSubscriptionDto.birthdate,
        phone: createSubscriptionDto.phone,
        postcode: createSubscriptionDto.postcode,
        address: createSubscriptionDto.address,
        number: createSubscriptionDto.number,
        complement: createSubscriptionDto.complement || null,
        neighborhood: createSubscriptionDto.neighborhood,
        city: createSubscriptionDto.city,
        state: createSubscriptionDto.state,
        paymentMethod: createSubscriptionDto.paymentMethod,
        cardHolderName: createSubscriptionDto.cardHolderName || null,
        cardNumber: cardNumberLast4,
        cardExpiry: createSubscriptionDto.cardExpiry || null,
        // IMPORTANTE: Em produção, NÃO armazene o CVV!
        // cardCvv: createSubscriptionDto.cardCvv || null,
        status: 'pending',
        paymentStatus: null,
      },
    });

    return {
      id: subscription.id,
      cpf: subscription.cpf,
      planType: subscription.planType,
      status: subscription.status,
      createdAt: subscription.createdAt,
      message: 'Assinatura criada com sucesso!',
    };
  }

  async findAll() {
    return this.prisma.subscription.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    return this.prisma.subscription.findUnique({
      where: { id },
    });
  }

  async findByCpf(cpf: string) {
    return this.prisma.subscription.findUnique({
      where: { cpf },
    });
  }
}

