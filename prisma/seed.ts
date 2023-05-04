import { createDataWithRelationship } from "./src/courses/create";
import { create_non_exist_teacher } from "./src/courses/create_non_exist_teacher";
import { create_exist_teacher } from "./src/courses/create_exist_teacher";
import { create_fk_teacher } from "./src/courses/create_fk_teacher";
import { create_teacher } from "./src/teacher/create";
import { findRelations } from "./src/teacher/findRelations";
import { findOne } from "./src/findOne";
import { update } from "./src/update";
import { CreateAuthors } from "./src/Authors/createAuthors";
import { CreateBooks } from "./src/books/CreateBook";

// createDataWithRelationship();
// create_non_exist_teacher();
// create_exist_teacher();
// create_fk_teacher();
// create_teacher();
// findOne();
// update();

// CreateAuthors();
CreateBooks();
// findRelations();
