// Generated by CoffeeScript 1.7.1
(function() {
  var PixAlbum;

  PixAlbum = (function() {
    function PixAlbum() {}

    PixAlbum.prototype.getAlbumMain = function(callback, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._get('https://emma.pixnet.cc/album/main', {
        data: data,
        done: (function(_this) {
          return function(data) {
            if (callback) {
              return callback(data);
            }
          };
        })(this),
        fail: (function(_this) {
          return function(data) {
            return pixnet.apiInvalidGrantFunc(function() {
              return _this.getAlbumMain.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixAlbum.prototype.getAlbumSetfolders = function(callback, userName, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        user: userName,
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._get('https://emma.pixnet.cc/album/setfolders', {
        data: data,
        done: (function(_this) {
          return function(data) {
            if (callback) {
              return callback(data);
            }
          };
        })(this),
        fail: (function(_this) {
          return function(data) {
            return pixnet.apiInvalidGrantFunc(function() {
              return _this.getAlbumSets.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixAlbum.prototype.sortSetFolders = function(callback, ids, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        ids: ids,
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._post('https://emma.pixnet.cc/album/setfolders/position', {
        data: data,
        done: (function(_this) {
          return function(data) {
            if (callback) {
              return callback(data);
            }
          };
        })(this),
        fail: (function(_this) {
          return function(data) {
            return pixnet.apiInvalidGrantFunc(function() {
              return _this.sortSetFolders.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixAlbum.prototype.getAlbumSets = function(callback, userName, optionData) {
      var data;
      data = {
        user: userName
      };
      data = pixnet._extends(data, optionData);
      pixnet._get("http://emma.pixnet.cc/album/sets", pixnet._defaultXHROptions(data, callback));
      return this;
    };

    PixAlbum.prototype.getAlbumSet = function(callback, id, userName, optionData) {
      var data;
      data = {
        user: userName
      };
      data = pixnet._extends(data, optionData);
      pixnet._get("http://emma.pixnet.cc/album/sets/" + id, pixnet._defaultXHROptions(data, callback));
      return this;
    };

    PixAlbum.prototype.getAlbumSetElements = function(callback, setId, userName, optionData) {
      var data;
      data = {
        user: userName
      };
      data = pixnet._extends(data, optionData);
      pixnet._get("http://emma.pixnet.cc/album/sets/" + setId, pixnet._defaultXHROptions(data, callback));
      return this;
    };

    PixAlbum.prototype.getAlbumSetComments = function(callback, userName, optionData) {
      var data;
      data = {
        user: userName
      };
      data = pixnet._extends(data, optionData);
      pixnet._get("http://emma.pixnet.cc/album/set_comments", pixnet._defaultXHROptions(data, callback));
      return this;
    };

    PixAlbum.prototype.createAlbumSet = function(callback, title, description, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        title: title,
        description: description,
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._post('https://emma.pixnet.cc/album/sets', {
        data: data,
        done: (function(_this) {
          return function(data) {
            if (callback) {
              return callback(data);
            }
          };
        })(this),
        fail: (function(_this) {
          return function(data) {
            return pixnet.apiInvalidGrantFunc(function() {
              return _this.createAlbumSet.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixAlbum.prototype.updateAlbumSet = function(callback, id, title, description, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        title: title,
        description: description,
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._post("https://emma.pixnet.cc/album/sets/" + id, {
        data: data,
        done: (function(_this) {
          return function(data) {
            if (callback) {
              return callback(data);
            }
          };
        })(this),
        fail: (function(_this) {
          return function(data) {
            return pixnet.apiInvalidGrantFunc(function() {
              return _this.updateAlbumSet.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixAlbum.prototype.deleteAlbumSet = function(callback, id, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._delete("https://emma.pixnet.cc/album/sets/" + id, {
        data: data,
        done: (function(_this) {
          return function(data) {
            if (callback) {
              return callback(data);
            }
          };
        })(this),
        fail: (function(_this) {
          return function(data) {
            return pixnet.apiInvalidGrantFunc(function() {
              return _this.deleteAlbumSet.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixAlbum.prototype.sortAlbumSets = function(callback, parentId, ids, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        parent_id: parentId,
        ids: ids,
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._post("https://emma.pixnet.cc/album/sets/position", {
        data: data,
        done: (function(_this) {
          return function(data) {
            if (callback) {
              return callback(data);
            }
          };
        })(this),
        fail: (function(_this) {
          return function(data) {
            return pixnet.apiInvalidGrantFunc(function() {
              return _this.sortAlbumSets.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixAlbum.prototype.getAlbumSetsNear = function(callback, userName, lat_y, lon_x, optionData) {
      var data;
      data = {
        user: userName,
        lat: lat_y,
        lon: lon_x
      };
      data = pixnet._extends(data, optionData);
      pixnet._get("http://emma.pixnet.cc/album/sets/nearby", pixnet._defaultXHROptions(data, callback));
      return this;
    };

    PixAlbum.prototype.getAlbumFolders = function(callback, userName, optionData) {
      var data;
      data = {
        user: userName
      };
      data = pixnet._extends(data, optionData);
      pixnet._get("http://emma.pixnet.cc/album/folders", pixnet._defaultXHROptions(data, callback));
      return this;
    };

    PixAlbum.prototype.getAlbumFolder = function(callback, id, userName, optionData) {
      var data;
      data = {
        user: userName
      };
      data = pixnet._extends(data, optionData);
      pixnet._get("http://emma.pixnet.cc/album/folders/" + id, pixnet._defaultXHROptions(data, callback));
      return this;
    };

    PixAlbum.prototype.getAlbumFolderSets = function(callback, id, userName, optionData) {
      var data;
      data = {
        user: userName
      };
      data = pixnet._extends(data, optionData);
      pixnet._get("http://emma.pixnet.cc/album/folders/" + id + "/sets", pixnet._defaultXHROptions(data, callback));
      return this;
    };

    PixAlbum.prototype.createAlbumFolder = function(callback, title, description, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        title: title,
        description: description,
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._post('https://emma.pixnet.cc/album/folders', {
        data: data,
        done: (function(_this) {
          return function(data) {
            if (callback) {
              return callback(data);
            }
          };
        })(this),
        fail: (function(_this) {
          return function(data) {
            return pixnet.apiInvalidGrantFunc(function() {
              return _this.createAlbumFolder.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixAlbum.prototype.updateAlbumFolder = function(callback, id, title, description, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        title: title,
        description: description,
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._post("https://emma.pixnet.cc/album/folders/" + id, {
        data: data,
        done: (function(_this) {
          return function(data) {
            if (callback) {
              return callback(data);
            }
          };
        })(this),
        fail: (function(_this) {
          return function(data) {
            return pixnet.apiInvalidGrantFunc(function() {
              return _this.updateAlbumFolder.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixAlbum.prototype.deleteAlbumFolder = function(callback, id, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._delete("https://emma.pixnet.cc/album/folders/" + id, {
        data: data,
        done: (function(_this) {
          return function(data) {
            if (callback) {
              return callback(data);
            }
          };
        })(this),
        fail: (function(_this) {
          return function(data) {
            return pixnet.apiInvalidGrantFunc(function() {
              return _this.deleteAlbumFolder.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixAlbum.prototype.getAlbumElements = function(callback, setId, userName, optionData) {
      var data;
      data = {
        user: userName,
        set_id: setId
      };
      data = pixnet._extends(data, optionData);
      pixnet._get("http://emma.pixnet.cc/album/elements", pixnet._defaultXHROptions(data, callback));
      return this;
    };

    PixAlbum.prototype.getElement = function(callback, elementId, userName, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        user: userName,
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._get("https://emma.pixnet.cc/album/elements/" + elementId, {
        data: data,
        done: (function(_this) {
          return function(data) {
            if (callback) {
              return callback(data);
            }
          };
        })(this),
        fail: (function(_this) {
          return function(data) {
            return pixnet.apiInvalidGrantFunc(function() {
              return _this.getElement.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixAlbum.prototype.getElementComments = function(callback, elementId, userName, optionData) {
      var data;
      data = {
        user: userName
      };
      data = pixnet._extends(data, optionData);
      pixnet._get("http://emma.pixnet.cc/album/elements/" + elementId + "/comments", pixnet._defaultXHROptions(data, callback));
      return this;
    };

    PixAlbum.prototype.createElement = function(callback, setId, uploadFile, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        set_id: setId,
        upload_file: uploadFile,
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      if (data.upload_method === "base64") {
        data.upload_file = uploadFile.replace('data:image/png;base64,', '');
      }
      pixnet._upload("https://emma.pixnet.cc/album/elements", {
        data: data,
        done: (function(_this) {
          return function(data) {
            if (callback) {
              return callback(data);
            }
          };
        })(this),
        fail: (function(_this) {
          return function(data) {
            return pixnet.apiInvalidGrantFunc(function() {
              return _this.createElement.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixAlbum.prototype.updateElement = function(callback, id, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._post("https://emma.pixnet.cc/album/elements/" + id, {
        data: data,
        done: (function(_this) {
          return function(data) {
            if (callback) {
              return callback(data);
            }
          };
        })(this),
        fail: (function(_this) {
          return function(data) {
            return pixnet.apiInvalidGrantFunc(function() {
              return _this.updateElement.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixAlbum.prototype.deleteElement = function(callback, id, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._delete("https://emma.pixnet.cc/album/elements/" + id, {
        data: data,
        done: (function(_this) {
          return function(data) {
            if (callback) {
              return callback(data);
            }
          };
        })(this),
        fail: (function(_this) {
          return function(data) {
            return pixnet.apiInvalidGrantFunc(function() {
              return _this.deleteElementt.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixAlbum.prototype.sortElement = function(callback, setId, ids, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        set_id: setId,
        ids: ids,
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._post("https://emma.pixnet.cc/album/elements/position", {
        data: data,
        done: (function(_this) {
          return function(data) {
            if (callback) {
              return callback(data);
            }
          };
        })(this),
        fail: (function(_this) {
          return function(data) {
            return pixnet.apiInvalidGrantFunc(function() {
              return _this.sortElement.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixAlbum.prototype.getElementCommentsNear = function(callback, userName, lat_y, lon_x, optionData) {
      var data;
      data = {
        user: userName,
        lat: lat_y,
        lon: lon_x
      };
      data = pixnet._extends(data, optionData);
      pixnet._get("http://emma.pixnet.cc/album/elements/nearby", pixnet._defaultXHROptions(data, callback));
      return this;
    };

    PixAlbum.prototype.getSetComments = function(callback, userName, optionData) {
      var data;
      data = {
        user: userName
      };
      data = pixnet._extends(data, optionData);
      pixnet._get("http://emma.pixnet.cc/album/set_comments", pixnet._defaultXHROptions(data, callback));
      return this;
    };

    PixAlbum.prototype.getSetComment = function(callback, id, userName, optionData) {
      var data;
      data = {
        user: userName
      };
      data = pixnet._extends(data, optionData);
      pixnet._get("http://emma.pixnet.cc/album/set_comments/" + id, pixnet._defaultXHROptions(data, callback));
      return this;
    };

    PixAlbum.prototype.createSetComment = function(callback, setId, userName, body, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        set_id: setId,
        user: userName,
        body: body,
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._post("https://emma.pixnet.cc/album/set_comments", {
        data: data,
        done: (function(_this) {
          return function(data) {
            if (callback) {
              return callback(data);
            }
          };
        })(this),
        fail: (function(_this) {
          return function(data) {
            return pixnet.apiInvalidGrantFunc(function() {
              return _this.createSetComments.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixAlbum.prototype.markSetCommentSpam = function(callback, id, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._post("https://emma.pixnet.cc/album/set_comments/" + id + "/mark_spam", {
        data: data,
        done: (function(_this) {
          return function(data) {
            if (callback) {
              return callback(data);
            }
          };
        })(this),
        fail: (function(_this) {
          return function(data) {
            return pixnet.apiInvalidGrantFunc(function() {
              return _this.markCommentSpam.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixAlbum.prototype.markSetCommentHam = function(callback, id, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._post("https://emma.pixnet.cc/album/set_comments/" + id + "/mark_ham", {
        data: data,
        done: (function(_this) {
          return function(data) {
            if (callback) {
              return callback(data);
            }
          };
        })(this),
        fail: (function(_this) {
          return function(data) {
            return pixnet.apiInvalidGrantFunc(function() {
              return _this.markCommentSpam.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixAlbum.prototype.deleteSetComment = function(callback, id, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._delete("https://emma.pixnet.cc/album/set_comments/" + id, {
        data: data,
        done: (function(_this) {
          return function(data) {
            if (callback) {
              return callback(data);
            }
          };
        })(this),
        fail: (function(_this) {
          return function(data) {
            return pixnet.apiInvalidGrantFunc(function() {
              return _this.deleteSetComment.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixAlbum.prototype.getComments = function(callback, userName, optionData) {
      var data;
      data = {
        user: userName
      };
      data = pixnet._extends(data, optionData);
      pixnet._get("http://emma.pixnet.cc/album/comments", pixnet._defaultXHROptions(data, callback));
      return this;
    };

    PixAlbum.prototype.getComment = function(callback, id, userName, optionData) {
      var data;
      data = {
        user: userName
      };
      data = pixnet._extends(data, optionData);
      pixnet._get("http://emma.pixnet.cc/album/comments/" + id, pixnet._defaultXHROptions(data, callback));
      return this;
    };

    PixAlbum.prototype.createElementComment = function(callback, elementId, userName, body, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        element_id: elementId,
        user: userName,
        body: body,
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._post("https://emma.pixnet.cc/album/comments", {
        data: data,
        done: (function(_this) {
          return function(data) {
            if (callback) {
              return callback(data);
            }
          };
        })(this),
        fail: (function(_this) {
          return function(data) {
            return pixnet.apiInvalidGrantFunc(function() {
              return _this.createElementComments.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixAlbum.prototype.markElementCommentSpam = function(callback, commentId, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._post("https://emma.pixnet.cc/album/comments/" + commentId + "/mark_spam", {
        data: data,
        done: (function(_this) {
          return function(data) {
            if (callback) {
              return callback(data);
            }
          };
        })(this),
        fail: (function(_this) {
          return function(data) {
            return pixnet.apiInvalidGrantFunc(function() {
              return _this.markElementCommentSpam.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixAlbum.prototype.markElementCommentHam = function(callback, commentId, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._post("https://emma.pixnet.cc/album/comments/" + commentId + "/mark_ham", {
        data: data,
        done: (function(_this) {
          return function(data) {
            if (callback) {
              return callback(data);
            }
          };
        })(this),
        fail: (function(_this) {
          return function(data) {
            return pixnet.apiInvalidGrantFunc(function() {
              return _this.markElementCommentSpam.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixAlbum.prototype.deleteElementComment = function(callback, commentId, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._delete("https://emma.pixnet.cc/album/comments/" + commentId, {
        data: data,
        done: (function(_this) {
          return function(data) {
            if (callback) {
              return callback(data);
            }
          };
        })(this),
        fail: (function(_this) {
          return function(data) {
            return pixnet.apiInvalidGrantFunc(function() {
              return _this.deleteElementComment.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixAlbum.prototype.createFace = function(callback, userName, elementId, posX, posY, width, height, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        user: userName,
        element_id: elementId,
        x: posX,
        y: posY,
        w: width,
        h: height,
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._post("https://emma.pixnet.cc/album/faces", {
        data: data,
        done: (function(_this) {
          return function(data) {
            if (callback) {
              return callback(data);
            }
          };
        })(this),
        fail: (function(_this) {
          return function(data) {
            return pixnet.apiInvalidGrantFunc(function() {
              return _this.createFace.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixAlbum.prototype.updateFace = function(callback, faceId, userName, elementId, posX, posY, width, height, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        user: userName,
        element_id: elementId,
        x: posX,
        y: posY,
        w: width,
        h: height,
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._post("https://emma.pixnet.cc/album/faces/" + faceId, {
        data: data,
        done: (function(_this) {
          return function(data) {
            if (callback) {
              return callback(data);
            }
          };
        })(this),
        fail: (function(_this) {
          return function(data) {
            return pixnet.apiInvalidGrantFunc(function() {
              return _this.updateFace.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixAlbum.prototype.deleteFace = function(callback, faceId, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._delete("https://emma.pixnet.cc/album/faces/" + faceId, {
        data: data,
        done: (function(_this) {
          return function(data) {
            if (callback) {
              return callback(data);
            }
          };
        })(this),
        fail: (function(_this) {
          return function(data) {
            return pixnet.apiInvalidGrantFunc(function() {
              return _this.deleteFace.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixAlbum.prototype.getConfig = function(callback, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._get("https://emma.pixnet.cc/album/config", {
        data: data,
        done: (function(_this) {
          return function(data) {
            if (callback) {
              return callback(data);
            }
          };
        })(this),
        fail: (function(_this) {
          return function(data) {
            return pixnet.apiInvalidGrantFunc(function() {
              return _this.getConfig.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixAlbum.prototype.getSiteCategories = function(callback, optionData) {
      var data;
      data = {};
      data = pixnet._extends(data, optionData);
      pixnet._get("http://emma.pixnet.cc/album/site_categories", pixnet._defaultXHROptions(data, callback));
      return this;
    };

    return PixAlbum;

  })();

  pixnet.album = new PixAlbum();

}).call(this);
