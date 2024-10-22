export default class MyUploadAdapter {
  constructor(loader) {
    // Save Loader instance to update upload progress.
    this.loader = loader
    console.log('我是loader:', loader)
  }



  async upload() {
    let formData = new FormData();

    console.log('loaderFile', await this.loader.file)

    formData.append('file', await this.loader.file);


    console.log(formData)
    console.log(formData.entries())

    // 遍歷FormData對象,查看是否有存進去
    for (let pair of formData.entries()) {
      // 如果值是一個File對象，則打印文件的詳細信息
      if (pair[1] instanceof File) {
        console.log(pair[0] + ', File:');
        console.log('Name:', pair[1].name);
        console.log('Size:', pair[1].size);
        console.log('Type:', pair[1].type);
      } else {
        // 如果不是文件，則直接打印鍵值對
        console.log(pair[0] + ', ' + pair[1]);
      }
    }


    try {
      const res = await $fetch('/api/user/uploadFile', {
        method: 'POST',
        ssr: false,
        body: formData,
      });

      console.log(res)
      return {default :res }
      // 假设上传结果为JSON格式，含有url字段
      // if (res && res.url) {
      //   return { default: res.url };
      // } else {
      //   throw new Error('上传失败，未返回有效的URL');
      // }
    } catch (error) {
      throw new Error(error); // 抛出包含错误信息的对象
    }
  }

  abort() {
    // Implement abort logic here if needed for Nuxt.js
    // For example, you might need to cancel any ongoing $fetch request
  }


  // async upload() {
  //   const { fileUpload } = 'api' //上传的接口

  //   let formData = new FormData()
  //   formData.append('uploadfile', await this.loader.file)

  //   formData.append('filePath', this.filePath)//存储到服务器的路径


  //   let config = {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   }

  //   return new Promise(async (resolve, reject) => {
  //     fileUpload(formData, config)
  //       .then(async res => {

  //         //注意这里的resolve的内容一定要是一个对象，而且一定要有一个default设置为图片上传后的url，这是ckeditor的规定格式。这里后端返回的路径一定是一个图片全路径，不然回显不了。但是这会涉及到，换了个服务器地址，已经存在数据库的图片显示不出来，不通用。
  //         //可以让后端进行代理转发解决这个问题，类似于跨域的解决。存储的图片地址不写完整的路径，就是这里的url只有/image,后端代理转发到真正的服务器地址。


  //         resolve({ default: res.url|| '' })
  //       })
  //       .catch(err => {
  //         reject('錯誤信息為',err)
  //       })
  //   })
  // }
}
