import GoalsFirstSection from "../../features/about/goals/component/goals_first_section";
import GoladImage from "../../features/about/goals/component/goals_image";
import GoalsSecondSection from "../../features/about/goals/component/goals_second_section";
import { useFetchGoals } from "../../features/about/goals/hook/use_fetch_goals";

const Goals = ()=> {
    const {data:goalsData , isLoading : goalsDataLoading , error:goalsDataError} = useFetchGoals();
    return(
        <div>
            <GoladImage goalsData = {goalsData}/>
            <GoalsFirstSection goalsData ={goalsData}/>
            <GoalsSecondSection goalsData = {goalsData}/>
        </div>
    )
}
export default Goals;