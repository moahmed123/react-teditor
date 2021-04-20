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
        MessagePopup: "Missing updates",
        PargPopup : "If you haven't published them, you will miss out on the updates you made, before returning to the dashboard Are you sure you want to return to the dashboard?        ",
        Cancel: 'Cancel',
        Confirm: "Confirm",
        SaveMessage: "The Changes Fields Saved Successfully",
        SaveMessageTitle: 'Save Fields',
        PublishMessage: "publish Data Is Successfully",
        SectionNotFound : "No Section Found",
        ConfirmMsgForDeleteSection : 'Are you sure you want to delete this section ?',
        TitleDeleteSection:"Delete Section",
        internalPages: "Internal Pages",
        Exiteditor: "Exit editor",
        Delete_modal: 'Delete',
        save:"save"
    },
    ar: {
        Browse: "تصفح",
        Clear: "مسح",
        HomePage: 'الصفحة الرئيسية',
        AddNewSection: 'إضافة قسم جديد',
        Lang: 'EN',
        Reset: 'إعادة تعيين',
        Publish:'نشر التحديثات',
        SectionsAvailable: 'الأقسام المتاحة',
        MainTheme: 'الثيمات الرئيسية',
        MessagePopup: "فقدان التحديثات",
        PargPopup : `سوف تفقد التحديثات التى قمت بها إذا لم تقم بنشرها، قبل العودة للوحة التحكم
هل أنت متأكد أنك تريد العودة للوحة القيادة؟`,
        Cancel: "إلغاء",
        Confirm:"تأكيد",
        SaveMessage: "تم حفظ التغييرات الحقول بنجاح",
        SaveMessageTitle: 'حفظ الحقول',
        PublishMessage: "نشر البيانات بنجاح",
        SectionNotFound : "لم يتم العثور على قسم",
        ConfirmMsgForDeleteSection : 'هل أنت متأكد أنك تريد حذف هذا القسم؟',
        TitleDeleteSection:"حذف القسم",
        internalPages: "الصفحات الداخلية",
        Exiteditor: "الخروج من المحرر",
        save:"حفظ"
    }
});
export default translationStrings;