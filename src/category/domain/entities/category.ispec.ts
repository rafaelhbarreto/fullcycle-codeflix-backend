import ValidationError from "../../../@shared/validation/validation-error";
import { Category } from "./category";

describe('Category integration tests', () => {
  
  describe('category integration invalid tests', () => {
    it('Should throw a error when ', () => {
      const arrange = [
        {props: {name: null}, errrorMessage: 'The field name is required'}, 
        {props: {name: ''}, errrorMessage: 'The field name is required'}, 
        {props: {name: undefined}, errrorMessage: 'The field name is required'}, 
        {props: {name: 'Comedy', description: 5 as any}, errrorMessage: 'The field description must be a string'}, 
        {
          props: 
          {
            name: 'Comedy', 
            description: 'some description', 
            is_active: "boolean" as any
          }, 
          errrorMessage: 'The field is_active must be a boolean'
        }, 
      ];
  
      arrange.forEach( caseTest => {
        expect(() => new Category(caseTest.props)).toThrow(caseTest.errrorMessage); 
      });
    });
  }); 

  describe('category integration valid cases', () => {
    it('should not thrown an error when the category is valid', () => {
      const arrange = [
        {props: {name: 'movie'}},
        {props: {name: 'movie', description: "some description"}},
        {props: {name: 'movie', description: "some description", is_active: false}}
      ];
  
      arrange.forEach( caseTest => {
        expect(() => new Category(caseTest.props)).not.toThrow(ValidationError); 
      });
    })
  });
}); 