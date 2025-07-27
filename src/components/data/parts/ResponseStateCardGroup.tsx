import ResponseStateCard, { DeptResponseStateProp } from "@/components/data/parts/ResponseStateCard";
import { Box } from '@mui/material';

export interface ResponseStateCardGroupProps{
    enqueteName            : string;
    deptResponseStateProps : DeptResponseStateProp[];
}

const ResponseStateCardGroup = (
    { enqueteName, deptResponseStateProps }: ResponseStateCardGroupProps 
) => {

    // 表示部署の合算データ処理
    // 要素の宣言 (他の命名との競合により, 'All'など全体を表す名称は入れず, DeptResponseStateProp の変数名に準拠)
    let esqIdList: string[] = [];
    let nameList: string[] = [];
    let hasResponseList: boolean[] = [];

    // 合算データ用の DeptResponseStateProp 生成
    for(let prop of deptResponseStateProps){
        esqIdList = esqIdList.concat(prop.esqIdList);
        nameList = nameList.concat(prop.nameList);
        hasResponseList = hasResponseList.concat(prop.hasResponseList);
    }
    const totalProp : DeptResponseStateProp = {
        deptName         : '選択事業部の総計',
        esqIdList        : esqIdList,
        nameList         : nameList,
        hasResponseList  : hasResponseList
    };

    return (
        <Box 
            display='flex'
            justifyContent='center'
            flexWrap='wrap'
            gap={2}
            alignItems='center'>
            {deptResponseStateProps.map((prop, idx) => (
                <ResponseStateCard 
                    key={idx}
                    enqueteName={enqueteName}
                    deptName={prop.deptName}
                    esqIdList={prop.esqIdList}
                    nameList={prop.nameList}
                    hasResponseList={prop.hasResponseList}
                />
            ))}
            {/* 最終行に総計追加 */}
            <ResponseStateCard 
                key={deptResponseStateProps.length}
                enqueteName={enqueteName}
                deptName={totalProp.deptName}
                esqIdList={totalProp.esqIdList}
                nameList={totalProp.nameList}
                hasResponseList={totalProp.hasResponseList}
            />
        </Box>
    );
};

export default ResponseStateCardGroup;

