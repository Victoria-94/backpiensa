import { ApiProperty } from "@nestjs/swagger";
export class CreateArticleDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    imagenUrl: string;

    @ApiProperty()
    authors: string;

    @ApiProperty()
    createDate: Date;

    @ApiProperty()
    magazine: string;
}
