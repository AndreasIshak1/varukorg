export class ICartItems {
  constructor(public name: string, public price: number, public isAdded: boolean) {
    this.isAdded = false;
  }
}