import { validate } from "uuid";
import { Category } from "./category";


describe('Category unit tests', () => {
  
  test('category constructor', () => {
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

  test('category without optional props', () => {

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


  test('id field on category', () => {
    const categoryProvider = [
      {props: {name: 'category 1'}},
      {props: {name: 'category 1'}, id: null},
      {props: {name: 'category 1'}, id: undefined},
      {props: {name: 'category 1'}, id: '79cd91b5-41bb-4764-9d9f-350ff9e2ba2f'},
    ]; 

    categoryProvider.forEach(data => {
      let category = new Category(data.props, data.id); 
      expect(category.id).not.toBeNull();
      expect(validate(category.id)).toBeTruthy();
    });
  }); 
});