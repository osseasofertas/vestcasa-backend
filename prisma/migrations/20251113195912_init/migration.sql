-- CreateTable
CREATE TABLE "subscriptions" (
    "id" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "planType" TEXT NOT NULL,
    "planValue" DECIMAL(10,2) NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birthdate" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "cardHolderName" TEXT,
    "cardNumber" TEXT,
    "cardExpiry" TEXT,
    "cardCvv" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "paymentStatus" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "subscriptions_cpf_key" ON "subscriptions"("cpf");
