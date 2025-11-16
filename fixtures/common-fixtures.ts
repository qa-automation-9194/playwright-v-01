import {test as baseTest} from "../fixtures/pom-fixture";

import CommonUtil from "../utils/commonUtils";

type CommonFixturesType = {
    commonUtils: CommonUtil;
}

export const test = baseTest.extend<CommonFixturesType>({
    commonUtils : async({}, use) =>{
        const commonUtilObj = new CommonUtil();
        await use(commonUtilObj);
    }
})