import { faker } from '@faker-js/faker'
export class GenerateData{
  static getData():string{
       // return faker.internet.email();
       faker.lorem.sentence(4);
       return faker.company.name()
    }

}

