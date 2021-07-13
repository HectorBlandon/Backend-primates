import { ProductoModelo } from './producto-modelo.entity';

describe('Producto', () => {
  it('should be defined', () => {
    expect(new ProductoModelo()).toBeDefined();
  });
});
