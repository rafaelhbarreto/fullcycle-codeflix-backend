import CategoryValidatorFactory, { CategoryValidator } from "./category-validator";

describe("Category validator tests", () => {

  it('Should validate the name property', () => {

    const arrange = [
      {
        data: {name: null}, 
        isValid: false, 
        messages: [
          'name should not be empty',
          'name must be a string',
          'name must be shorter than or equal to 255 characters'
        ],
      },
      
      {
        data: {name: ""}, 
        isValid: false, 
        messages: [
          'name should not be empty',
        ],
      },
      
      {
        data: {name: 5 as any}, 
        isValid: false, 
        messages: [
          'name must be a string',
          'name must be shorter than or equal to 255 characters'
        ]
      },
      
      {
        data: {name: 't'.repeat(256)}, 
        isValid: false, 
        messages: [
          'name must be shorter than or equal to 255 characters'
        ],
      },
      
      {
        data: {name: "Jhon doe"}, 
        isValid: true, 
        messages: [],
      },
    ];

    arrange.forEach(caseTest => {

      let validator = CategoryValidatorFactory.create()

      const isValid = validator.validate(caseTest.data); 
      expect(isValid).toBe(caseTest.isValid);

      if(!isValid) {
        expect(validator.errors['name']).toStrictEqual(caseTest.messages);
      }
    });
  });

});