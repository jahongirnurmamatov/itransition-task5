import { generateBooks } from "./bookGeneration.js";
import {allFakers} from '@faker-js/faker'

console.log(allFakers['ja'].person.fullName() , allFakers['ja'].lorem.word()())
