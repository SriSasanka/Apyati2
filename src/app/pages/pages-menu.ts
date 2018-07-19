import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
  {
    title: 'Administration and Security',
    group: true,
  },
  {
    title: 'Administration and Security',
    icon: 'nb-menu',
    children: [
      {
        title: 'Login & Security',
        icon: 'nb-locked',
        children: [
          {
            title: 'Lab Details',
            link: '/pages/administration/login-security/labdetails',
          },
          {
            title: 'Screens Master',
            link: '/pages/administration/login-security/ScreensMaster',
          },
          {
            title: 'Roles Master',
            link: '/pages/administration/login-security/RolesMaster',
          },
          {
            title: 'Login User Master',
            link: '/pages/administration/login-security/LoginUserMaster',
          },
          {
            title: 'Change Password',
            link: '/pages/administration/login-security/ChangePassword',
          },
          {
            title: 'Reset Password',
            link: '/pages/administration/login-security/ResetPassword',
          },
          {
            title: 'Migration Master',
            link: '/pages/administration/login-security/MigrationMaster',
          },
        ],
      },
      {
        title: 'Tariffs & Labs',
        icon: 'nb-person',
        children: [
          {
            title: 'Company',
            link: '/pages/Admin-Security/Tariffs-Labs/Company',
          },
          {
            title: 'Tariff',
            link: '/pages/Admin-Security/Tariffs-Labs/Tariff',
          },
          {
            title: 'Header Formatter',
            link: '/pages/Admin-Security/Tariffs-Labs/HeaderFormatter',
          },
          {
            title: 'Doctor Details',
            link: '/pages/Admin-Security/Tariffs-Labs/DoctorDetails',
          },
          {
            title: 'External Lab Details',
            link: '/pages/Admin-Security/Tariffs-Labs/ExternalLabDetails',
          },
          {
            title: 'Sample Collections',
            link: '/pages/Admin-Security/Tariffs-Labs/SampleCollections',
          },
          {
            title: 'Department',
            link: '/pages/Admin-Security/Tariffs-Labs/Department',
          },
        ],
      },
      {
        title: 'Lab Tests & Profiles',
        icon: 'nb-menu',
        children: [
          {
            title: 'Age Master',
            link: '/pages/Admin-Security/LabTests-Profiles/AgeMaster',
          },
          {
            title: 'Test Group',
            link: '/pages/Admin-Security/LabTests-Profiles/TestGroup',
          },
          {
            title: 'Sub Group',
            link: '/pages/Admin-Security/LabTests-Profiles/SubGroup',
          },
          {
            title: 'Test Sample Type',
            link: '/pages/Admin-Security/LabTests-Profiles/TestSampleType',
          },
          {
            title: 'Method',
            link: '/pages/Admin-Security/LabTests-Profiles/Method',
          },
          {
            title: 'Test Timings',
            link: '/pages/Admin-Security/LabTests-Profiles/TestTimings',
          },
          {
            title: 'Lab Test',
            link: '/pages/Admin-Security/LabTests-Profiles/>LabTest',
          },
          {
            title: 'Test Profiles',
            link: '/pages/Admin-Security/LabTests-Profiles/TestProfiles',
          },
          {
            title: 'Demographics',
            link: '/pages/Admin-Security/LabTests-Profiles/Demographics',
          },
          {
            title: 'Report Template Internal',
            link: '/pages/Admin-Security/LabTests-Profiles/ReportTemplateInternal',
          },
          {
            title: 'Report Format',
            link: '/pages/Admin-Security/LabTests-Profiles/ReportFormat',
          },
          {
            title: 'Setup Master',
            link: '/pages/Admin-Security/LabTests-Profiles/SetupMaster',
          },
          {
            title: 'Report Doctors',
            link: '/pages/Admin-Security/LabTests-Profiles/ReportDoctors',
          },
        ],
      },
    ],
  },
  {
    title: 'Billing and Reporting',
    group: true,
  },
  {
    title: 'Billing and Reporting',
    icon: 'nb-menu',
    children: [
      {
        title: 'Register Patient',
        link: '/pages/Billing-Reporting/RegisterPatient',
      },
      {
        title: 'Search Patient',
        link: '/pages/Billing-Reporting/SearchPatient',
      },
      {
        title: 'Search Bill',
        link: '/pages/Billing-Reporting/SearchBill',
      },
      {
        title: 'Print/Edit Reports',
        link: '/pages/Billing-Reporting/PrintEditReports',
      },
    ],
  },
  {
    title: 'MIS Reports',
    group: true,
  },
  {
    title: 'MIS Reports',
    icon: 'nb-menu',
    children: [
      {
        title: 'Daily Cash Book',
        link: '/pages/MISReports/DailyCashBook',
      },
      {
        title: 'Billing Details',
        link: '/pages/MISReports/BillingDetails',
      },
      {
        title: 'Billing Summary',
        link: '/pages/MISReports/BillingSummary',
      },
      {
        title: ' Referral Details',
        link: '/pages/MISReports/ ReferralDetails',
      },
      {
        title: 'Tests Statistics',
        link: '/pages/MISReports/TestsStatistics',
      },
      {
        title: 'Abnormality Results ',
        link: '/pages/MISReports/AbnormalityResults ',
      },
    ],
  },
];
