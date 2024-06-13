export class ShopInfoInputDTO {
  /**
   * @alias 쇼핑몰 이름
   * @description ex:'스마트스토어'
   */
  shopName: string;
  /**
   * @alias 상품 가격
   * @description ex:price
   */
  price: number;
  /**
   * @alias 상품명
   * @description ex:'손풍기'
   */
  name: string;
}

export class CommonOutputDTO {
  /**
   * @alias 성공여부
   * @description ex:'스마트스토어'
   */
  success: boolean;
  /**
   * @alias 입력받은 값
   * @description ex:ShopInfoInputDTO
   */
  result: ShopInfoInputDTO;
}
