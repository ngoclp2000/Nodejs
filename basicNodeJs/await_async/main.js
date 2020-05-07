function scaryClown() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([123,3123123,'4124']);
      }, 2000);
    });
  }
  
  async function msg() {
    const msg = await scaryClown();
    const msq = await scaryClown();
    console.log('Message:', msg);
    console.log(msq);
  }
  msg();