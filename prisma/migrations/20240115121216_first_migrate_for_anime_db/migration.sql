-- CreateTable
CREATE TABLE "MyCollection" (
    "id" SERIAL NOT NULL,
    "anime_mal_id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "anime_name" TEXT NOT NULL,
    "anime_image" TEXT NOT NULL,
    "anime_score" DOUBLE PRECISION NOT NULL,
    "anime_studio" TEXT NOT NULL,

    CONSTRAINT "MyCollection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" SERIAL NOT NULL,
    "anime_mal_id" TEXT NOT NULL,
    "anime_name" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "rating" TEXT,
    "user_email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "user_image" TEXT,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MyCollection_anime_mal_id_user_email_key" ON "MyCollection"("anime_mal_id", "user_email");
