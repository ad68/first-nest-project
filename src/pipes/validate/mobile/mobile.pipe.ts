import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class MobilePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const mobile = value.mobile;
    if (mobile.length !== 11) {
      throw new BadRequestException("موبایل باید 11 رقم باشد")
    }
    if (mobile.startsWith("0912")) value.operator = "همراه اول"
    if (mobile.startsWith("0935")) value.operator = "ایرانسل"
    if (mobile.startsWith("0922")) value.operator = "رایتل"
    return value;
  }
}
