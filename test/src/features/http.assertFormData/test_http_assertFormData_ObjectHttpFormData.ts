import typia from "typia";

import { _test_http_assertFormData } from "../../internal/_test_http_assertFormData";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_http_assertFormData_ObjectHttpFormData =
  _test_http_assertFormData("ObjectHttpFormData")<ObjectHttpFormData>(
    ObjectHttpFormData,
  )((input) => typia.http.assertFormData<ObjectHttpFormData>(input));
