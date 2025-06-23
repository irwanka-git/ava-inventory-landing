/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {JSEncrypt} from "jsencrypt";

export function RSADecrypt(encrypted: string):any{

    const prvky = `MIICXAIBAAKBgQCvC+1eeXjnMitYENGSnGVfZbcmkU7Du1MPHunKp9AsHRb+Amw6
    bq6vYGdicpMHdGdcYd6TTFXBk2IpxBAuyZVk9V2stH5CKMBHjYaSBcQIAiiDU6Wi
    jorDNfJGpM0tp9vCFBWIfeLvVAWlmehd7Iv46KxIS6dfzx9IWYlU8opruQIDAQAB
    AoGAJKoL4vDwiQRyHbUQIHRPq2ajsRlYdRjkcdNYxtDVgpfpO/UH9ElAn41CulUj
    RLl1+NyrARFJGQ2kzvi5JwOkHbL3Gcu8VeURnRH0yLfIdYvLaLAU2yxV4sBWCce5
    SfEc1k7Xj29JS8H1eBQEkp00C5KcdYJPcctW4Mahb/b5K4ECQQDw6UHALovmtWki
    3TyXRbO6GpJAnC5JNTz6mjp9pPFF1pdiFnZ/RT6Qm55YiFMdxvHf6io36D5ZCyno
    VV4kr0rRAkEAugKa56omUIYG1n6wTKkC8mFLoGhf8H85BO3RhhTKckSV4RaoFm+u
    gIO+wZPWoYOShPGiRKovfVbc5hfius/8aQJBAKGEkeuqiWulpxaT48K8HbKhi/q7
    e6Dji72s15hTlNuw8w/1ZX8QytCjNTfANpGZR6NLWQDguaRzgqZdTeAkknECQFV2
    YvOzsnzmx3d/p8LhGHCCkXu22PWnjmwcVFsVbFqJ9o7/mOUOFRAI9/j60u9Mg2I/
    nv2Lb9xXr5CsQsjwTJkCQCcShKoI1FOkFYtz17xsej7j26ZFq7jW9JO5VclqXo9X
    OXvXhIvaz1RaNkw5lkrtmwTsxlxSxfZwK/HMR+3BvYs=`
    const entor = new JSEncrypt()
    entor.setPrivateKey(prvky);
    const uncrypted = entor.decrypt(encrypted);
    return uncrypted;
}

export function RSAEncrypt(plaintext: string): any {
    const puky = `MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCvC+1eeXjnMitYENGSnGVfZbcm
    kU7Du1MPHunKp9AsHRb+Amw6bq6vYGdicpMHdGdcYd6TTFXBk2IpxBAuyZVk9V2s
    tH5CKMBHjYaSBcQIAiiDU6WijorDNfJGpM0tp9vCFBWIfeLvVAWlmehd7Iv46KxI
    S6dfzx9IWYlU8opruQIDAQAB`
    const entor = new JSEncrypt();
    entor.setPublicKey(puky);
    const encrypted = entor.encrypt(plaintext);
    return encrypted;
}

