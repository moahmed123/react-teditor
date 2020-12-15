import LocalizedStrings from 'react-localization';

const translationStrings = new LocalizedStrings({
    en: {
        Browse: "Browse",
        Clear: "Clear", 
        HomePage: 'home page',
        AddNewSection: 'Add New Section',
        Lang: 'عربي',
        Reset: 'Reset',
        Publish:"Publish",
        SectionsAvailable: 'sections Available',
        MainTheme: 'Main Theme'

    },
    ar: {
        Browse: "تصفح",
        Clear: "مسح",
        HomePage: 'الصفحة الرئيسية',
        AddNewSection: 'إضافة قسم جديد',
        Lang: 'EN',
        Reset: 'إعادة تعيين',
        Publish:'نشر',
        SectionsAvailable: 'الأقسام المتاحة',
        MainTheme: 'الثيمات الرئيسية'
    }
});
export default translationStrings;