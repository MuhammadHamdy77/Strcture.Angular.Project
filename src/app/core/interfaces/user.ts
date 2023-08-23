
export interface User {
    jti:number ;
    userId:number ;
    sub:string;
    genderId:number ; 
    academicYearId:number ; 
    boysAcademicYearID:number ; 
    girlsAcademicYearID :number ; 
    userType:number ; 
    departmentId:number ; 
    divisionId:number ; 
    sectionId:number ; 
    position:string ; 
    isSuper:boolean ;
    pageSize:number ;
    JobId:number ;
    isManager:boolean ;
    Jobs:[] ;
    exp:string ;
 }