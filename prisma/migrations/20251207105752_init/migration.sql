-- CreateTable
CREATE TABLE "aiOutput" (
    "id" SERIAL NOT NULL,
    "formData" TEXT,
    "aiResponse" TEXT NOT NULL,
    "templateSlug" TEXT,
    "createdBy" TEXT,
    "createdAt" TEXT,

    CONSTRAINT "aiOutput_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userSubscription" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "userName" TEXT,
    "active" BOOLEAN,
    "paymentId" TEXT,
    "joinDate" TEXT,

    CONSTRAINT "userSubscription_pkey" PRIMARY KEY ("id")
);
