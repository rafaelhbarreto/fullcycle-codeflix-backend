import UniqueUUid from "../../../@shared/domain/value-objects/unique-uuid-vo"; 
import { Category } from "./category";
import { validate } from 'uuid'; 

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
      {props: {name: 'category 1'}, id: new UniqueUUid()},
    ]; 

    categoryProvider.forEach(data => {
      let category = new Category(data.props, data.id); 
      expect(category.id).not.toBeNull();
      expect(validate(category.id)).toBeTruthy();
    });
  }); 

  it('Should activate the category', () => {
    const cat = new Category({
      name: 'movies', 
      is_active: false
    }); 

    cat.activate();

    expect(cat.is_active).toBeTruthy();
  });


  test('Should deactivate the category', () => {
    const cat = new Category({
      name: 'movies' 
    }); 

    cat.deactivate();

    expect(cat.is_active).toBeFalsy();
  });

  it('should update the category', () => {
    const props = {
      name: "Movie",
      description: 'Action movies'
    }

    const category = new Category(props); 
    category.update('Drama', 'Drama movies');

    expect(category.name).toBe('Drama');
    expect(category.description).toBe('Drama movies');
  });

});