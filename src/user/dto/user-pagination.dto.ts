import { IsOptional } from 'class-validator';
import { PaginationDto } from 'src/shared/dto';

export class UserPaginationDto extends PaginationDto {
  @IsOptional()
  is_active?: boolean;
}
