import { Category } from "./category";

describe('Category unit tests', () => {
  
  test('test category constructor', () => {
    const propsCategory = {
      name: 'Some name',
      description: 'Some description',
      is_active: true,
      date: new Date(),
    }

    const category = new Category(propsCategory);
    
    expect(category.name).toBe(propsCategory.name);
    expect(category.description).toBe(propsCategory.description);
    expect(category.is_active).toBe(propsCategory.is_active);
    expect(category.date).toBe(propsCategory.date);
  }); 

  test('test category without optional props', () => {

    const propsCategory = {
      name: 'some name'
    }

    const category = new Category(propsCategory); 

    expect(category.name).toBe(propsCategory.name); 
    expect(category.description).toBeNull();
    expect(category.is_active).toBeTruthy();
    expect(category.date).not.toBeNull();
    expect(category.date).toBeInstanceOf(Date);
  });

});