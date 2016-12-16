from ldif3 import LDIFWriter

def main():
	fileLDIF = open('data.ldif','wb');
	writer = LDIFWriter(fileLDIF);
	writer.unparse('mail=alice@example.com', {
    'cn': ['Alice Alison'],
    'mail': ['alice@example.com'],
    'objectclass': ['top', 'person'],
	})


if __name__ == "__main__": main()
