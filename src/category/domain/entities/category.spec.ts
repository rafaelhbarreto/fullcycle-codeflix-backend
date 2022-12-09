import { Category } from "./category";

describe('Category tests', () => {
  
  test('test category', () => {
    const category = new Category('Movie'); 
    expect(category.name).toBe('Movie'); 
  }); 

});