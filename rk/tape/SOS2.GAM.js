function tape_file() {
var file = {
name: "SOS2.GAM",
start: 0x0000,
end: 0x0ce0,
entry: 0x0000,
image:
"\x21\x6D\x7E\xE5\x01\x02\x00\x16\x2F\x1E\x23\xCD\x53\x04\xE1\x23\x01\x02\x00\x16\x5C\x1E\x23\xCD\x53\x04\x21\xF9\x79\x22\xCC\x0B" +
"\x0E\x0F\x11\xB3\xFF\x2A\xCC\x0B\x23\x22\xCC\x0B\x36\x6F\x2B\x36\x2B\x19\x36\x5F\xFB\x00\x00\xC5\xCD\x19\x04\xC1\xF3\x00\x00\x36" +
"\x00\x2A\xCC\x0B\x36\x00\x2B\x36\x00\x0D\xC2\x25\x00\x11\x4E\x00\x0E\x0F\x2A\xCC\x0B\x19\x22\xCC\x0B\x36\x09\xC5\xCD\x19\x04\xC1" +
"\x36\x00\x0D\xC2\x52\x00\xCD\x6C\x00\xC3\xA9\x00\x26\x03\x01\x28\x00\x11\x32\x00\xCD\xFF\x04\xCD\x19\x04\x25\xC2\x6E\x00\xCD\x19" +
"\x04\x26\x03\x01\x96\x00\x11\x32\x00\xCD\xFF\x04\xCD\x19\x04\x25\xC2\x83\x00\xCD\x19\x04\x26\x03\x01\x28\x00\x11\x32\x00\xCD\xFF" +
"\x04\xCD\x19\x04\x25\xC2\x98\x00\xC9\x0E\x1F\xCD\x09\xF8\x21\x08\x09\xCD\x18\xF8\x21\xC1\x77\xE5\x16\x1B\x1E\x19\x01\x4E\x00\xCD" +
"\x53\x04\x21\x01\x78\x11\x19\x1B\x01\x4E\x00\xCD\x53\x04\xE1\x11\x49\x1C\x1E\x40\x01\x01\x00\xCD\x53\x04\x21\x0D\x7F\x11\x48\x1C" +
"\xCD\x53\x04\x21\xA1\x0B\xCD\x18\xF8\x0E\x08\xCD\x09\xF8\xCD\x03\xF8\x4F\xD6\x30\xDA\xEE\x00\xFE\x0A\xD2\xEE\x00\xCD\x09\xF8\x87" +
"\x47\x87\x80\x2F\x3C\x47\x0E\xFF\x21\x00\x40\x09\x22\xDA\x0B\xCD\x03\xF8\xFE\x08\xCA\xE9\x00\xFE\x0D\xC2\x0F\x01\x21\xA2\x7E\x22" +
"\xD6\x0B\x21\xA7\x7E\x22\xD4\x0B\x3E\x02\x32\xCA\x0B\x32\xDC\x0B\x21\x4E\x7A\x22\xCC\x0B\x2B\x22\xCE\x0B\x21\x00\x7A\x22\xD0\x0B" +
"\x2E\x28\x26\x3C\x22\xD2\x0B\x21\x5E\x05\xCD\x18\xF8\x21\x10\x78\x01\x4E\x00\xC5\x11\x24\x17\xD5\xCD\x53\x04\x21\x02\x78\xD1\xC1" +
"\xCD\x53\x04\x3E\xCF\x32\xE8\x79\x3E\x09\x32\x57\x7E\xCD\x1B\xF8\xFE\x08\xCA\xFD\x02\xFE\x18\xCA\x3D\x03\xFE\x19\xCA\x6A\x03\xFE" +
"\x1A\xCA\x72\x03\xFE\x51\xCA\x7A\x03\xFE\x5E\xCA\x89\x03\x3A\xCA\x0B\x11\xFF\xFF\x01\x00\xFF\xFE\x01\xCA\xB8\x01\x11\x01\x00\x01" +
"\x00\x01\xFE\x02\xCA\xB8\x01\x11\xB2\xFF\x01\xFF\x00\xFE\x03\xCA\xB8\x01\x11\x4E\x00\x01\x01\x00\x2A\xCC\x0B\x36\x00\x3A\xC9\x0B" +
"\xFE\x01\xCA\xE6\x01\xFE\x02\xCA\xCD\x01\xC3\x04\x02\x19\x22\xCC\x0B\x2A\xCE\x0B\x36\x00\x19\x22\xCE\x0B\x2A\xD0\x0B\x36\x00\x19" +
"\x22\xD0\x0B\xCD\x23\x04\x2A\xCC\x0B\x36\x00\x19\x22\xCC\x0B\x2A\xCE\x0B\x36\x00\x19\x22\xCE\x0B\x2A\xD0\x0B\x36\x00\x19\x22\xD0" +
"\x0B\xCD\x23\x04\x2A\xCC\x0B\x7E\xFE\x2A\xCA\xAB\x04\xFE\x09\xCA\x96\x03\xCD\xA7\x03\x2A\xCE\x0B\x7E\xFE\x09\xCA\xD0\x03\xCD\xA7" +
"\x03\x2A\xD0\x0B\x7E\xFE\x09\xCA\xD0\x03\xCD\xA7\x03\x2A\xCC\x0B\x36\x30\x2A\xCE\x0B\x36\x2B\x2A\xD0\x0B\x3A\xDD\x0B\x3D\x32\xDD" +
"\x0B\xEA\x49\x02\x36\x5F\xC3\x4B\x02\x36\x2E\x00\x2A\xD4\x0B\x3A\xD8\x0B\xFE\x01\xCA\x77\x02\x23\x7E\xFE\x17\xC2\x66\x02\x3E\x01" +
"\x32\xD8\x0B\xC3\x77\x02\x36\x24\x22\xD4\x0B\x2A\xD6\x0B\x36\x00\x23\x22\xD6\x0B\xC3\x97\x02\x2A\xD6\x0B\x2B\x7E\xFE\x17\xC2\x89" +
"\x02\x3E\x02\x32\xD8\x0B\xC3\x4C\x02\x36\x24\x22\xD6\x0B\x2A\xD4\x0B\x36\x00\x2B\x22\xD4\x0B\x2A\xD6\x0B\x11\xB2\xFF\x19\x01\x05" +
"\x00\x23\x7E\xFE\x09\xCA\xB1\x02\x0B\x78\xB1\xC2\xA1\x02\xC3\xD1\x02\x36\x00\x3A\xD8\x0B\xFE\x01\xCA\xBF\x02\x23\xC3\xC0\x02\x2B" +
"\x36\x09\x23\x7E\xFE\x30\xCA\x96\x03\x2B\x2B\x7E\xFE\x1E\xCA\x96\x03\x2A\xDA\x0B\x2B\x7C\xB5\xC2\xD4\x02\x3A\xDA\x77\xFE\x31\xCA" +
"\x5A\x04\x2A\xD2\x0B\x3E\x1B\x32\xA4\x7E\x3A\x56\x7E\xFE\x09\xCA\xF7\x02\x3E\x1B\x32\x56\x7E\xCD\x45\x04\xC3\x6D\x01\x3A\xCA\x0B" +
"\xFE\x01\xCA\x8E\x01\x3E\x01\x32\xCA\x0B\x3A\xDC\x0B\xFE\x01\xCA\x8E\x01\x3E\x01\x32\xDC\x0B\x2A\xD0\x0B\x36\x00\x2B\x22\xD0\x0B" +
"\x2A\xD2\x0B\x01\x00\xFF\xCD\x23\x04\x22\xD2\x0B\x2A\xCC\x0B\xEB\x2A\xCE\x0B\x22\xCC\x0B\xEB\x22\xCE\x0B\xC3\x8E\x01\x3A\xCA\x0B" +
"\x3E\x02\x32\xCA\x0B\x3A\xDC\x0B\xFE\x02\xCA\x8E\x01\x3E\x02\x32\xDC\x0B\x2A\xD0\x0B\x36\x00\x23\x22\xD0\x0B\x2A\xD2\x0B\x01\x00" +
"\x01\xCD\x23\x04\x22\xD2\x0B\xC3\x2C\x03\x3E\x03\x32\xCA\x0B\xC3\x8E\x01\x3E\x04\x32\xCA\x0B\xC3\x8E\x01\x3A\xC9\x0B\xFE\x02\xCA" +
"\x8E\x01\x3C\x32\xC9\x0B\xC3\x8E\x01\x3A\xC9\x0B\x3D\xDA\x8E\x01\x32\xC9\x0B\xC3\x8E\x01\x3A\xCB\x0B\x3C\x32\xCB\x0B\x3A\xD1\x77" +
"\x3C\x32\xD1\x77\xC3\x2D\x02\xFE\x17\xCA\xD0\x03\xFE\xCF\xCA\xD0\x03\xFE\x03\xCA\xD0\x03\xFE\x15\xCA\xD0\x03\xFE\x06\xCA\xD0\x03" +
"\xFE\x11\xCA\xD0\x03\xFE\x5E\xCA\xD0\x03\xFE\x24\xCA\xD0\x03\xC9\xCD\x30\x04\x21\xB0\x08\xCD\x18\xF8\xCD\x19\x04\xCD\x30\x04\x2A" +
"\xD2\x0B\x21\xC7\x08\xCD\x18\xF8\x21\xF9\x08\xCD\x18\xF8\xCD\x1E\x05\xCD\x19\x04\xCD\x19\x04\xCD\x19\x04\xCD\x19\x04\xCD\x19\x04" +
"\xCD\x19\x04\x21\x4A\x0B\xCD\x18\xF8\xCD\x03\xF8\xFE\x4E\xCA\x00\xF8\xFE\x59\xCA\xA9\x00\xC3\x09\x04\x01\x00\x30\x0B\x78\xB1\xC2" +
"\x1C\x04\xC9\x2A\xD2\x0B\x7C\x80\x67\x7D\x81\x6F\x22\xD2\x0B\xC9\x2A\xD2\x0B\xEB\x21\xC6\x0B\xCD\x18\xF8\x62\x6B\x4D\xCD\x09\xF8" +
"\x4C\xCD\x09\xF8\xC9\x21\xDD\x77\x3E\x3A\x34\xBE\xC0\x36\x30\x2B\xC3\x4A\x04\x72\x09\x1D\xC2\x53\x04\xC9\x36\x00\x2A\xCC\x0B\x36" +
"\x00\x2B\x36\x00\x23\x23\x36\x00\x2B\x01\x4E\x00\x09\x7E\xFE\x17\xCA\x8A\x04\xFE\x5E\xCA\x8A\x04\x36\x30\x2B\x36\x49\x23\xCD\x19" +
"\x04\x36\x25\x2B\x36\x00\x23\xC3\x5D\x04\x36\x2A\x01\xB2\xFF\x09\x2B\x36\x5C\x23\x36\x21\x23\x36\x2F\x21\x16\x0B\xCD\x18\xF8\xCD" +
"\x03\xF8\xFE\x0D\xC2\x9F\x04\xC3\xA9\x00\x76\x3A\xD1\x77\xFE\x3A\xC2\xFA\x04\x3E\x09\x32\x39\x7A\xCD\x19\x04\x3E\x00\x32\x39\x7A" +
"\x01\x1E\x00\x21\x62\x0B\xC5\x7E\x23\x32\xEB\x79\xCD\x19\x04\x01\x16\x00\xE5\x21\xFF\x79\x2B\x7E\x23\x77\x2B\x0B\x78\xB1\xC2\xD6" +
"\x04\xE1\xC1\x0B\x78\xB1\xC2\xC6\x04\x21\x84\x0B\xCD\x18\xF8\xCD\x03\xF8\xFE\x0D\xC2\xEF\x04\xC3\xA9\x00\x3E\x19\xC3\x70\x01\xC5" +
"\xC1\xC5\xFB\x00\x00\x0B\x78\xB1\xC2\x05\x05\xF3\x00\x00\xC1\xC5\x0B\x78\xB1\xC2\x10\x05\x1B\x7A\xB3\xC2\x00\x05\xC1\xC9\x01\x50" +
"\x00\x11\x46\x00\xCD\xFF\x04\x01\x46\x00\x11\x46\x00\xCD\xFF\x04\x01\x3C\x00\x11\x4B\x00\xCD\xFF\x04\x01\x32\x00\x11\x50\x00\xCD" +
"\xFF\x04\x01\x28\x00\x11\x5A\x00\xCD\xFF\x04\x01\x1E\x00\x11\x64\x00\xCD\xFF\x04\x01\x14\x00\x11\xA0\x00\xCD\xFF\x04\xC9\x0C\x46" +
"\x49\x52\x53\x54\x20\x4C\x45\x56\x45\x4C\x0D\x19\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0D\x0A\x20\x20\x20\x2F\x5F\x5C\x20\x0D\x0A\x20\x20" +
"\x20\x11\x23\x06\x20\x20\x2A\x2A\x2A\x2A\x2A\x0D\x0A\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x15\x0D\x0A\x17\x17" +
"\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x0D\x0A\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x09\x09\x0D\x0A\x17\x17" +
"\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x03\x0D\x0A\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17" +
"\x17\x17\x0D\x0A\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x09\x09\x0D\x0A\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17" +
"\x17\x17\x17\x17\x17\x17\x17\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
"\x20\x20\x20\x20\x20\x20\x17\x17\x09\x20\x20\x09\x0D\x0A\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17" +
"\x17\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x16\x17\x17" +
"\x17\x09\x20\x17\x17\x0D\x0A\x07\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x09\x20\x20\x20\x20" +
"\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x06\x17\x17\x17\x03\x03\x03\x17\x17\x17" +
"\x0D\x0A\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x07\x20\x20\x20\x20\x20\x20\x20\x20" +
"\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x17\x17\x17\x20\x20\x20\x17\x17\x17\x15\x0D\x0A\x17\x17\x17" +
"\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x07\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
"\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x17\x17\x17\x20\x20\x09\x17\x17\x17\x17\x11\x0D\x0A\x17\x17\x17\x17\x17\x17\x17" +
"\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x07\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
"\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x17\x17\x17\x17\x17\x17\x0D\x0A\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17" +
"\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
"\x20\x20\x20\x20\x20\x20\x20\x20\x17\x17\x17\x17\x17\x17\x0D\x0A\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17" +
"\x17\x17\x17\x17\x17\x17\x17\x17\x5E\x5E\x5E\x5E\x5E\x5E\x5E\x5E\x5E\x5E\x5E\x5E\x5E\x5E\x07\x07\x5E\x5E\x5E\x5E\x5E\x5E\x5E\x5E" +
"\x5E\x5E\x5E\x5E\x5E\x17\x17\x17\x17\x17\x17\x5E\x5E\x5E\x5E\x5E\x0D\x0A\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17" +
"\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17" +
"\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x0C\x53\x55\x42\x53\x49\x44\x45\x20\x50\x45\x4F\x50\x4C\x45\x0E" +
"\x30\x20\x20\x20\x54\x49\x4D\x45\x0E\x30\x30\x30\x30\x0D\x0A\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17" +
"\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17" +
"\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17" +
"\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17" +
"\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x17\x00\x08\x2E\x3E\x23\x3C\x2E\x19\x08\x08\x08\x08\x5C\x21\x2F\x08\x08" +
"\x08\x1A\x1A\x2F\x21\x5C\x00\x08\x08\x22\x2D\x3D\x3A\x3D\x2D\x22\x19\x08\x08\x08\x08\x08\x08\x22\x5C\x21\x2F\x22\x07\x19\x08\x08" +
"\x08\x08\x2E\x2C\x2E\x1A\x1A\x1A\x08\x08\x08\x08\x2C\x2F\x21\x5C\x2C\x08\x08\x08\x08\x1A\x2E\x27\x2E\x1B\x59\x2A\x39\x47\x41\x4D" +
"\x45\x20\x4F\x56\x45\x52\x07\x00\x1B\x59\x25\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x14" +
"\x13\x03\x14\x20\x20\x20\x20\x16\x17\x17\x15\x20\x20\x20\x20\x14\x13\x03\x14\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
"\x20\x20\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x15\x20\x20\x20\x20\x20\x20\x06\x11" +
"\x20\x20\x06\x11\x20\x20\x20\x15\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0D\x0A\x20\x20\x20\x20" +
"\x02\x02\x02\x20\x03\x20\x03\x20\x03\x20\x02\x02\x02\x20\x20\x02\x03\x14\x10\x20\x20\x20\x17\x20\x20\x20\x20\x17\x20\x20\x20\x02" +
"\x03\x14\x10\x20\x20\x02\x02\x02\x20\x03\x20\x03\x20\x03\x20\x02\x02\x02\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
"\x20\x20\x20\x20\x20\x20\x04\x20\x20\x20\x17\x20\x20\x20\x06\x11\x20\x20\x06\x11\x20\x20\x04\x20\x20\x20\x17\x20\x20\x20\x20\x20" +
"\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x03" +
"\x14\x17\x01\x20\x20\x20\x20\x02\x17\x17\x01\x20\x20\x20\x20\x03\x14\x13\x01\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
"\x20\x20\x0D\x0A\x0A\x0A\x0A\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C" +
"\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C" +
"\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x20\x4D\x4F\x53\x43\x4F\x57\x2D\x31\x39\x38\x38\x20\x20\x20\x20\x20\x20\x20\x20\x41\x53\x53\x4D\x20" +
"\x22\x6D\x69\x6B\x72\x6F\x6E\x22\x20\x20\x20\x54\x48\x45\x20\x41\x55\x54\x4F\x52\x20\x49\x53\x20\x53\x54\x45\x52\x4C\x49\x4B\x4F" +
"\x56\x20\x53\x2E\x41\x2E\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2A\x2A\x2A\x20\x41\x44\x41\x50\x54\x45\x52" +
"\x20\x46\x4F\x52\x20\x52\x41\x44\x49\x4F\x2D\x38\x36\x52\x4B\x20\x2A\x2A\x2A\x0D\x0A\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C" +
"\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C" +
"\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x00\x07\x1B\x59\x2F\x34\x45\x4E\x44\x20\x4F" +
"\x46\x20\x50\x45\x54\x52\x4F\x4C\x0A\x08\x08\x08\x08\x08\x08\x08\x08\x08\x08\x08\x08\x08\x50\x52\x45\x53\x53\x20\x3C\x45\x4E\x54" +
"\x45\x52\x3E\x2E\x07\x07\x07\x07\x07\x00\x1F\x1B\x59\x2F\x39\x4F\x4E\x43\x45\x20\x4D\x4F\x52\x45\x3F\x28\x59\x2F\x4E\x29\x07\x07" +
"\x07\x00\x29\x29\x29\x60\x75\x72\x69\x64\x61\x72\x29\x29\x29\x20\x69\x64\x60\x6C\x20\x79\x6E\x65\x73\x61\x70\x73\x20\x65\x43\x42" +
"\x20\x29\x29\x29\x07\x07\x1B\x59\x2F\x39\x50\x52\x45\x53\x53\x20\x41\x20\x42\x55\x54\x54\x4F\x4E\x20\x3C\x45\x4E\x54\x45\x52\x3E" +
"\x00\x0D\x0A\x0A\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x49\x4E\x50\x55\x54\x20\x53\x50\x45\x45\x44\x28\x30\x2E\x2E" +
"\x2E\x39\x29\x20\x20\x00\x1B\x59\x00\x01\x04\x03\xCC\x7B\xCB\x7B\x7E\x7B\x2D\x34\xA6\x7E\xA1\x7E\x01\x00\xFF\x40\x02\x03\x52\x00" +
"\x73\xE5\xCD\x7C\x0B\xC3\x11\x0C\xCD\x25\x0C\xC8\xFE\x2B\xCA\xF6\x0B\xFE\x2D\xC2\xFA\x0B\x32\x11\x10\x23\xCD\x66\x0C\x0C\xCA\x83" +
"\x0A\x3A\x11\x10\xFE\x2D\xC2\x10\x0C\xAF\x93\x5F\x3E\x00\x9A\x57\xE5\x2A\x0A\x10\x19\x22\x0A\x10\xE1\xCD\x66\x0C\x0C\xC2\x83\x0A" +
"\x0E\x02\xC3\xE8\x0B\x7E\xB7\xC8\xFE\x2C\xC8\xFE\x3B\xC8\x37\xC9\xE5\x21\x94\x0E\x41\x11\x56\x10\x48\x7E\x23\xB7\xCA\x64\x0C\xB9" +
"\xCA\x4D\x0C\x4F\x23\x0D\xC2\x44\x0C\x23\xC3\x35\x0C\x1A\x13\xBE\xC2\x44\x0C\x23\x0D\xC2\x4D\x0C\x7E\x32\x0A\x10\x07\x07\x07\x32" +
"\x0B\x10\x3E\x01\xE1\xC9\xCD\xC5\x0A\x0D\xF2\xFC\x0C\x7E\xFE\x27\xCA\xE0\x0C\xFE\x24\xCA\x0C\x0D\xFE\x30\xF8\xFE\x3A\xF0\x11\x56" +
"\x10\x0E\x00\xD6\x30\x12\x13\x23\x7E\xFE\x30\xFA\xA8\x0C\xFE\x3A\xFA\x83\x0C\xFE\x41\xFA\xA8\x0C\x0C\xFE\x48\xCA\xB2\x0C\xFE\x4A" +
"\xF2\x83\x0A\xD6\x07\xC3\x83\x0C\xAF\xB9\xC2\x83\x0A\x3E\x19\xC3\xB5\x0C\x23\x3E\x29\x12\xE5\x21\x56\x10\x11\x00\x00\xDE\x19\x47" +
"\x7E\x23\xFE\x10\xF2\x17\x0D\x4F\x78\xB7\x06\x00\xE5\x62\x6B\x29\x29\xC2\xD8\x0C\x19\xC3\xD9\x0C\x29\x29\x09\xEB\xE1\xC3\xBF\x0C" +
"\x0E"};
ui.file_loaded(file);
}
tape_file();