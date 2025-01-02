import '../styles/Page.css'
import WorkExperienceBox from './WorkExperienceBox'

export default function WorkExperience () {
    return (
        <div className='background'>
            <h2>
                Work Experience
            </h2>
            <WorkExperienceBox 
                jobTitle='Junior Developer Co-Op' 
                startMonth='January'
                startYear='2023'
                endMonth='April'
                endYear='2023'
                companyName='Assembly Digital Media'
            />
            <WorkExperienceBox 
                jobTitle='Quality Assurance Co-Op' 
                startMonth='September'
                startYear='2021'
                endMonth='December'
                endYear='2021'
                companyName='VertiGIS North America'
            />
            <WorkExperienceBox 
                jobTitle='Software Developer' 
                startMonth='January'
                startYear='2021'
                endMonth='April'
                endYear='2021'
                companyName='High Energy Physics Research Center (University of Victoria)'
            />
            <WorkExperienceBox 
                jobTitle='Junior Software Developer' 
                startMonth='May'
                startYear='2020'
                endMonth='August'
                endYear='2020'
                companyName='Ruboss'
            />
        </div>
    )
}