import { applyDecorators, Type } from '@nestjs/common';
import { ApiResponse, ApiResponseMetadata, getSchemaPath } from '@nestjs/swagger';

import { BaseResponse } from '@app/user/dto/BaseResponse';

export const ApiBaseResponse = <TModel extends Type<any>>(
  model: TModel,
  options?: ApiResponseMetadata,
) => {
  const schema = { $ref: getSchemaPath(model) };

  const payload = options?.isArray
    ? { type: 'array', items: schema }
    : schema;


  return applyDecorators(
    ApiResponse({
      ...options,
      schema: {
        allOf: [
          { $ref: getSchemaPath(BaseResponse) },
          {
            properties: {
              payload,
            },
          },
        ],
      },
    }),
  );
}
