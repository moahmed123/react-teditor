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
        MainTheme: 'Main Theme',
        MessagePopup: "You will missed your update",
        PargPopup : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        Cancel: 'Cancel',
        Confirm: "Confirm"
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
        MainTheme: 'الثيمات الرئيسية',
        MessagePopup: "سوف تفوت التحديث الخاص بك",
        PargPopup : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        Cancel: "إلغاء",
        Confirm:"تأكيد"
    }
});
export default translationStrings;