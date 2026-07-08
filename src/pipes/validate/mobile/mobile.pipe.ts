import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class MobilePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const mobile = value.mobile;
    if (mobile.length !== 11) {
      throw new BadRequestException("موبایل باید 11 رقم باشد")
    }
    return value;
  }
}
