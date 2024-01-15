-- CreateTable
CREATE TABLE `MyCollection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `anime_mal_id` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,
    `anime_name` VARCHAR(191) NOT NULL,
    `anime_image` VARCHAR(191) NOT NULL,
    `anime_score` VARCHAR(191) NOT NULL,
    `anime_studio` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `MyCollection_anime_mal_id_user_email_key`(`anime_mal_id`, `user_email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
