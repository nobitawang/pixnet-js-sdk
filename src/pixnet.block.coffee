class PixBlock
  getBlock: (callback, optionData)->
    if not pixnet.isLogin
      pixnet._error 'Need login'
      return @

    data =
      access_token : pixnet.getData('accessToken')
    data = pixnet._extends(data, optionData)
    args = arguments
    pixnet._get('https://emma.pixnet.cc/blocks', {
      data: data
      done: (data)=>
        callback(JSON.parse(data)) if callback
      fail: (data)=>
        pixnet.apiInvalidGrantFunc(()=>
          @getBlock.apply(@, args)
        , data)
    })
    return @

  createBlock: (callback, userName, optionData)->
    if not pixnet.isLogin
      pixnet._error 'Need login'
      return @

    data =
      user: userName
      access_token : pixnet.getData('accessToken')
    data = pixnet._extends(data, optionData)
    args = arguments
    pixnet._post('https://emma.pixnet.cc/blocks/create', {
      data: data
      done: (data)=>
        callback(JSON.parse(data)) if callback
      fail: (data)=>
        pixnet.apiInvalidGrantFunc(()=>
          @createBlock.apply(@, args)
        , data)
    })
    return @

  deleteBlock: (callback, userName, optionData)->
    if not pixnet.isLogin
      pixnet._error 'Need login'
      return @

    data =
      user: userName
      access_token : pixnet.getData('accessToken')
    data = pixnet._extends(data, optionData)
    args = arguments
    pixnet._delete('https://emma.pixnet.cc/blocks/delete', {
      data: data
      done: (data)=>
        callback(JSON.parse(data)) if callback
      fail: (data)=>
        pixnet.apiInvalidGrantFunc(()=>
          @deleteBlock.apply(@, args)
        , data)
    })
    return @

pixnet.block = new PixBlock()