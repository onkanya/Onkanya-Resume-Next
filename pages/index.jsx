import BaseContainer from '../components/common/BaseContainer';
import GeneralComponent from '../components/common/GeneralComponent'
import SkillComponent from '../components/common/SkillComponent'

const Index = () => {
    const ProfileDetail = [
        {icon: 'woman', title: 'Gender', detail: 'Female'},
        {icon: 'contacts', title: 'Date of Birth', detail: 'March 15 1996'},
        {icon: 'home', title: 'Religion', detail: 'Bhuddism'},
        {icon: 'heart', title: 'Marital Status', detail: 'Single'},
    ]

    const EducationDetail= [
        {icon: 'book', title: 'Rajamangala University of Technology Lanna', detail: 'Computer Information System'},
    ]

    const ProgrammingDetail= [
        {title: 'JavaScript', detail: 60},
        {title: 'Vue js', detail: 50},
        {title: 'React js', detail: 40},
        {title: 'Node js', detail: 40},
        {title: 'MySQL', detail: 70},
    ]
    
    const EnglishDetail= [
        {title: 'Listening', detail: 70},
        {title: 'Reading', detail: 40},
        {title: 'Writing', detail: 40},
        {title: 'Speaking', detail: 40},
    ]

    const OthersDetail= [
        {title: 'Good coordinate', detail: 100},
        {title: 'Friendly personal', detail: 100},
        {title: 'Always on time', detail: 100},
    ]
    
    const ContactsDetail= [
        {icon: 'facebook', title: 'Facebook', detail: 'https//:www.facebook.com/Mean.Onkanya'},
        {icon: 'github', title: 'Github', detail: 'https://github.com/onkanya'},
        {icon: 'mail', title: 'E-mail', detail: 'onkanyalearning@gmail.com'},
        {icon: 'phone', title: 'Phone number', detail: '082-3883947'},
    ]

    return(
        <div>
            <BaseContainer titleheader='Profile'>
                {
                    ProfileDetail.map(profile => <GeneralComponent {...profile} />)
                }
            </BaseContainer>
            <BaseContainer titleheader='Education'>
                {
                    EducationDetail.map(education => <GeneralComponent {...education} />)
                }
            </BaseContainer>
            <BaseContainer titleheader='Programming skills'>
                {
                    ProgrammingDetail.map(programming => <SkillComponent {...programming} />)
                }
            </BaseContainer>
            <BaseContainer titleheader='English skills'>
                {
                    EnglishDetail.map(english => <SkillComponent {...english} />)
                }
            </BaseContainer>
            <BaseContainer titleheader='Other skills'>
                {
                    OthersDetail.map(other => <SkillComponent {...other} />)
                }
            </BaseContainer>
            <BaseContainer titleheader='Contacts'>
                {
                    ContactsDetail.map(profile => <GeneralComponent {...profile} />)
                }
            </BaseContainer>
        </div>
    )
}

export default Index