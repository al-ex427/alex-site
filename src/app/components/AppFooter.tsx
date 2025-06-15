
export default function AppFooter() {
    const currentYear = new Date().getFullYear();
    return (
        <div className={'footer footer-component'}>
        <p style={{fontWeight: '500'}} className='footer-text'>{currentYear} © al_ex427, alex's stuff</p>
        </div>
        
    )
}



