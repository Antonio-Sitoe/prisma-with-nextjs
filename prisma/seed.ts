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
import { create_modules } from "./src/modules/create_modules";
import { finde_by_course } from "./src/search/finde_by_course";
import { find_by_relation } from "./src/search/find_by_relation";
import { delete_item } from "./src/delete/delete";
import { filter_StartWith } from "./src/filter/filter";
import { filterOr } from "./src/filter/filterOr";

// createDataWithRelationship();
// create_non_exist_teacher();
// create_exist_teacher();
// create_fk_teacher();
// create_teacher();
// findOne();
// update();

// CreateAuthors();
// findRelations();
// create_modules();
// CreateBooks();
// find_by_relation();
// delete_item();

// filtros'
filterOr();
// filter_StartWith();
