// Generated by CoffeeScript 1.7.1
(function() {
  var PixFriend;

  PixFriend = (function() {
    function PixFriend() {}

    PixFriend.prototype.getGroups = function(callback, optionData) {
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
      pixnet._get('https://emma.pixnet.cc/friend/groups', {
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
              return _this.getGroups.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixFriend.prototype.createGroup = function(callback, name, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        name: name,
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._post('https://emma.pixnet.cc/friend/groups', {
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
              return _this.createGroup.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixFriend.prototype.updateGroup = function(callback, id, name, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        name: name,
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._post("https://emma.pixnet.cc/friend/groups/" + id, {
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
              return _this.updateGroup.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixFriend.prototype.deleteGroup = function(callback, id, optionData) {
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
      pixnet._delete("https://emma.pixnet.cc/friend/groups/" + id, {
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
              return _this.deleteGroup.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixFriend.prototype.getNews = function(callback, optionData) {
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
      pixnet._get('https://emma.pixnet.cc/friend/news', {
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
              return _this.getNews.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixFriend.prototype.getSubscriptions = function(callback, optionData) {
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
      pixnet._get('https://emma.pixnet.cc/friend/subscriptions', {
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
              return _this.getSubscriptions.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixFriend.prototype.createSubscription = function(callback, userName, optionData) {
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
      pixnet._post('https://emma.pixnet.cc/friend/subscriptions', {
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
              return _this.createSubscription.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixFriend.prototype.joinSubscriptionGroup = function(callback, userName, groupIds, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      if (pixnet.isArray(groupIds)) {
        groupIds = groupIds.toString();
      }
      data = {
        group_ids: groupIds,
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._post("https://emma.pixnet.cc/friend/subscriptions/" + userName + "/join_subscription_group", {
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
              return _this.joinSubscriptionGroup.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixFriend.prototype.leaveSubscriptionGroup = function(callback, userName, groupIds, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        group_ids: groupIds,
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._post("https://emma.pixnet.cc/friend/subscriptions/" + userName + "/leave_subscription_group", {
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
              return _this.leaveSubscriptionGroup.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixFriend.prototype.deleteSubscription = function(callback, userName, optionData) {
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
      pixnet._delete("https://emma.pixnet.cc/friend/subscriptions/" + userName, {
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
              return _this.leaveSubscriptionGroup.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixFriend.prototype.getSubscriptionGroup = function(callback, optionData) {
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
      pixnet._get('https://emma.pixnet.cc/friend/subscription_groups', {
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
              return _this.getSubscriptionGroup.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixFriend.prototype.createSubscriptionGroup = function(callback, name, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        name: name,
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._post('https://emma.pixnet.cc/friend/subscription_groups', {
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
              return _this.createSubscriptionGroup.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixFriend.prototype.updateSubscriptionGroup = function(callback, id, name, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        name: name,
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._post("https://emma.pixnet.cc/friend/subscription_groups/" + id, {
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
              return _this.updateSubscriptionGroup.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixFriend.prototype.deleteSubscriptionGroup = function(callback, id, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        name: name,
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._delete("https://emma.pixnet.cc/friend/subscription_groups/" + id, {
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
              return _this.deleteSubscriptionGroup.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixFriend.prototype.sortSubscriptionGroupTo = function(callback, ids, optionData) {
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
      pixnet._post("https://emma.pixnet.cc/friend/subscription_groups/position", {
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
              return _this.sortSubscriptionGroupTo.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixFriend.prototype.getFriendships = function(callback, optionData) {
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
      pixnet._get('https://emma.pixnet.cc/friendships', {
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
              return _this.getFriendships.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixFriend.prototype.createFriendship = function(callback, userName, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        user_name: userName,
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._post('https://emma.pixnet.cc/friendships', {
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
              return _this.createFriendship.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixFriend.prototype.deleteFriendship = function(callback, userName, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        user_name: userName,
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._delete('https://emma.pixnet.cc/friendships/delete', {
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
              return _this.deleteFriendship.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixFriend.prototype.appendFriendshipGroup = function(callback, userName, groupId, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        user_name: userName,
        group_id: groupId,
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._post('https://emma.pixnet.cc/friendships/append_group', {
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
              return _this.appendFriendshipGroup.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    PixFriend.prototype.removeFriendshipGroup = function(callback, userName, groupId, optionData) {
      var args, data;
      if (!pixnet.isLogin) {
        pixnet._error('Need login');
        return this;
      }
      data = {
        user_name: userName,
        group_id: groupId,
        access_token: pixnet.getData('accessToken')
      };
      data = pixnet._extends(data, optionData);
      args = arguments;
      pixnet._post('https://emma.pixnet.cc/friendships/remove_group', {
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
              return _this.removeFriendshipGroup.apply(_this, args);
            }, data, args);
          };
        })(this)
      });
      return this;
    };

    return PixFriend;

  })();

  pixnet.friend = new PixFriend();

}).call(this);
