import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsEnum,
  Matches,
  MinLength,
  MaxLength,
  Length,
} from 'class-validator';

export enum PlanType {
  SUPERCLUBE = 'superclube',
  CLUBE = 'clube',
}

export enum PaymentMethod {
  CREDIT_CARD = 'pagarme-credit-card',
  PIX = 'pagarme-pix',
}

export class CreateSubscriptionDto {
  // CPF
  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
    message: 'CPF deve estar no formato XXX.XXX.XXX-XX',
  })
  cpf: string;

  // Plano
  @IsEnum(PlanType)
  @IsNotEmpty()
  planType: PlanType;

  @IsString()
  @IsNotEmpty()
  planValue: string;

  // Dados pessoais
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{2}\/\d{2}\/\d{4}$/, {
    message: 'Data de nascimento deve estar no formato DD/MM/AAAA',
  })
  birthdate: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\(\d{2}\) \d{5}-\d{4}$/, {
    message: 'Telefone deve estar no formato (XX) XXXXX-XXXX',
  })
  phone: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{5}-\d{3}$/, {
    message: 'CEP deve estar no formato XXXXX-XXX',
  })
  postcode: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  number: string;

  @IsString()
  @IsOptional()
  complement?: string;

  @IsString()
  @IsNotEmpty()
  neighborhood: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 2)
  state: string;

  // Dados do pagamento
  @IsEnum(PaymentMethod)
  @IsNotEmpty()
  paymentMethod: PaymentMethod;

  // Dados do cartão (opcional se for PIX)
  @IsString()
  @IsOptional()
  cardHolderName?: string;

  @IsString()
  @IsOptional()
  cardNumber?: string;

  @IsString()
  @IsOptional()
  @Matches(/^\d{2}\/\d{4}$/, {
    message: 'Validade do cartão deve estar no formato MM/AAAA',
  })
  cardExpiry?: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(4)
  cardCvv?: string;
}

