-- CreateTable
CREATE TABLE `Products` (
    `IdProduct` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(250) NOT NULL,
    `Price` INTEGER NOT NULL,
    `Quantity` VARCHAR(250) NOT NULL,
    `Stock` INTEGER NOT NULL,
    `Description` VARCHAR(250) NOT NULL,

    PRIMARY KEY (`IdProduct`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
