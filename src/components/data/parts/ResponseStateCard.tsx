import DataCard from '@/components/data/elements/DataCard';
import DownloadableChart from '@/components/data/parts/DownloadableChart';
import ResponseStateGrid from '@/components/data/elements/ResponseStateGrid';
import ResponseStateTable, { ResponseStateRow } from '@/components/data/elements/ResponseStateTable';

export interface DeptResponseStateProp {
    deptName         : string;
    esqIdList        : string[];
    nameList         : string[];
    hasResponseList  : boolean[];
}

interface ResponseStateCardProp extends DeptResponseStateProp{
    enqueteName : string;
}

const ResponseStateCard = ({ enqueteName, 
                             deptName, 
                             esqIdList,
                             nameList,
                             hasResponseList
                            }: ResponseStateCardProp 
) => {
    // deptごとの従業員数
    const totalNum = esqIdList.length;

    // 回答率の処理 (%表示、小数第2位で四捨五入)
    const responseNum = hasResponseList.filter((bool)=>bool).length;
    let responseRate: number = responseNum / totalNum * 100;
    responseRate = Math.round(responseRate * 10) / 10;
    
    const labels = ['回答済み', '未回答'];
    const values = [responseNum, totalNum-responseNum];
    const fileName: string = 'RepChart_' + enqueteName + '_' + deptName + '.png';
    const responseStateChart = <DownloadableChart
                                    labels={labels}
                                    values={values}
                                    type='pie'
                                    fileName={fileName}
                                    height={300}
                                    top={20}
                                    right={20}
                                />
    
    const overviewContent = (
        <div style={{ padding: 12 }}>
            <ResponseStateGrid 
                   deptName={deptName}
                   responseRate={responseRate}
                   responseNum={responseNum}
                   totalNum={totalNum}
                   chart={responseStateChart}
            />
        </div>
    )

    const rows : ResponseStateRow[] = [];
    for(let i:number=0 ; i<totalNum ; i++){
        const row : ResponseStateRow = {
            esqId         : esqIdList[i],
            name          : nameList[i],
            responseState : hasResponseList[i] ? '回答済み' : '未回答'
        };
        rows.push(row);
    }
    const additionalContent = ( <ResponseStateTable rows={rows}/>);
    const popupTitle = '詳細: ' + deptName;

    return (
        <DataCard 
            overviewContent={overviewContent}
            additionalContent={additionalContent}
            popupTitle={popupTitle}
        />
    );
};

export default ResponseStateCard;

