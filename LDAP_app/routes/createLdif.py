from ldif3 import LDIFWriter

def main():
	fileLDIF = open('data.ldif','w');
	writer = LDIFWriter(fileLDIF);
	dnKey = 'dn';
	ouKey = 'ou';
	dcKey = 'dc';
	uidKey = 'uid';
	cnKey = 'cn';
	snKey = 'sn';
	mailKey = 'mail';
	objectclassKey = 'objectClass';
	userPasswordKey = 'userPassword';
	shadowLastChangeKey = 'shadowLastChange';
	shadowMinKey = 'shadowMin';
	shadowMaxKey = 'shadowMax';
	shadowWarningKey = 'shadowWarning';
	loginShellKey = 'loginShell';
	uidNumberKey = 'uidNumber';
	gidNumberKey = 'gidNumber';
	homeDirectoryKey = 'homeDirectory';

	#sample data
	uid = 'ldapuser1';
	ou = 'People';
	dc1 = 'summer';
	dc2 = 'sv.cmu.local'
	mail='ldapuser1@summer.sv.cmu.local';
	oc1= 'person';
	oc2 = 'organizationalPerson';
	oc3='inetOrgPerson';
	oc4='posixAccount';
	oc5 = 'top';
	oc6 = 'shadowAccount';
	userPassword = 'notsure';
	shadowLastChange = '17128'
	shadowMin = '0';
	shadowMax = '99999'
	shadowWarning = '7'
	loginShell = '/bin/bash'
	uidNumber = '500'
	gidNumber =  '500'
	homeDirectory = '/home/ldapuser1'

	writer.unparse(mailKey+'='+mail,{
	uidKey: [uid],
    cnKey: [uid],
    snKey: [uid],
    mailKey: [mail],
    objectclassKey: [oc1,oc2,oc3,oc4,oc5,oc6],
    userPasswordKey: userPassword,
    shadowLastChangeKey: [shadowLastChange],
    shadowMinKey: [shadowMin],
    shadowMaxKey: [shadowMax],
    shadowWarningKey: [shadowWarning],
    loginShellKey: [loginShell],
    uidNumberKey: [uidNumber],
    gidNumberKey:[gidNumber],
    homeDirectoryKey: [homeDirectory]
    });


if __name__ == "__main__": main()



