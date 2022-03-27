const mwConfig = {
  "pluginModules": [],
  "tagModes": {
      "ref": "text/mediawiki",
      "choose": "text/mediawiki",
      "option": "text/mediawiki",
      "indicator": "text/mediawiki",
      "poem": "text/mediawiki",
      "pre": "mw-tag-pre",
      "nowiki": "mw-tag-nowiki"
  },
  "tags": {
      "pre": true,
      "nowiki": true,
      "gallery": true,
      "indicator": true,
      "charinsert": true,
      "ref": true,
      "references": true,
      "poem": true,
      "choose": true,
      "option": true,
      "categorytree": true,
      "dynamicpagelist": true,
      "flashmp3": true,
      "imagemap": true,
      "inputbox": true,
      "modernsoundmanager": true,
      "poll": true,
      "sm2": true,
      "templatestyles": true
  },
  "doubleUnderscore": [
      {
          "__无目录__": "notoc",
          "__notoc__": "notoc",
          "__无图库__": "nogallery",
          "__nogallery__": "nogallery",
          "__强显目录__": "forcetoc",
          "__forcetoc__": "forcetoc",
          "__目录__": "toc",
          "__toc__": "toc",
          "__无编辑段落__": "noeditsection",
          "__无段落编辑__": "noeditsection",
          "__noeditsection__": "noeditsection",
          "__不转换标题__": "notitleconvert",
          "__notitleconvert__": "notitleconvert",
          "__notc__": "notitleconvert",
          "__不转换内容__": "nocontentconvert",
          "__nocontentconvert__": "nocontentconvert",
          "__nocc__": "nocontentconvert"
      },
      {
          "__新段落链接__": "newsectionlink",
          "__NEWSECTIONLINK__": "newsectionlink",
          "__无新段落链接__": "nonewsectionlink",
          "__NONEWSECTIONLINK__": "nonewsectionlink",
          "__隐藏分类__": "hiddencat",
          "__HIDDENCAT__": "hiddencat",
          "__EXPECTUNUSEDCATEGORY__": "expectunusedcategory",
          "__索引__": "index",
          "__INDEX__": "index",
          "__无索引__": "noindex",
          "__NOINDEX__": "noindex",
          "__静态重定向__": "staticredirect",
          "__STATICREDIRECT__": "staticredirect"
      }
  ],
  "functionSynonyms": [
      {
          "名称空间": "ns",
          "ns": "ns",
          "名称空间e": "nse",
          "nse": "nse",
          "url编码": "urlencode",
          "urlencode": "urlencode",
          "小写首字": "lcfirst",
          "lcfirst": "lcfirst",
          "大写首字": "ucfirst",
          "ucfirst": "ucfirst",
          "小写": "lc",
          "lc": "lc",
          "大写": "uc",
          "uc": "uc",
          "本地url": "localurl",
          "localurl": "localurl",
          "本地urle": "localurle",
          "localurle": "localurle",
          "完整url": "fullurl",
          "fullurl": "fullurl",
          "完整url等同": "fullurle",
          "fullurle": "fullurle",
          "规范url": "canonicalurl",
          "canonicalurl": "canonicalurl",
          "规范url等同": "canonicalurle",
          "canonicalurle": "canonicalurle",
          "格式化数字": "formatnum",
          "formatnum": "formatnum",
          "语法": "grammar",
          "grammar": "grammar",
          "性别": "gender",
          "gender": "gender",
          "复数": "plural",
          "plural": "plural",
          "bidi": "bidi",
          "#语言": "language",
          "#language": "language",
          "左填充": "padleft",
          "padleft": "padleft",
          "右填充": "padright",
          "padright": "padright",
          "锚编码": "anchorencode",
          "anchorencode": "anchorencode",
          "文件路径": "filepath",
          "filepath": "filepath",
          "页面id": "pageid",
          "pageid": "pageid",
          "界面": "int",
          "int": "int",
          "#特殊": "special",
          "#special": "special",
          "#特殊等同": "speciale",
          "#speciale": "speciale",
          "#标记": "tag",
          "#tag": "tag",
          "#格式化日期": "formatdate",
          "#日期格式化": "formatdate",
          "#formatdate": "formatdate",
          "#dateformat": "formatdate",
          "#regex": "regex",
          "#regexp": "regexp",
          "#while": "while",
          "#dowhile": "dowhile",
          "#eval": "eval",
          "#loop": "loop",
          "#forargs": "forargs",
          "#fornumargs": "fornumargs",
          "#非空式": "if",
          "#若": "if",
          "#如果": "if",
          "#if": "if",
          "#相同式": "ifeq",
          "#匹配式": "ifeq",
          "#若相等": "ifeq",
          "#如果相等": "ifeq",
          "#ifeq": "ifeq",
          "#多选式": "switch",
          "#多条件式": "switch",
          "#双射式": "switch",
          "#开关": "switch",
          "#转换": "switch",
          "#switch": "switch",
          "#存在式": "ifexist",
          "#若有": "ifexist",
          "#如有": "ifexist",
          "#ifexist": "ifexist",
          "#若表达式": "ifexpr",
          "#ifexpr": "ifexpr",
          "#错误式": "iferror",
          "#如果错误": "iferror",
          "#iferror": "iferror",
          "#时间": "time",
          "#time": "time",
          "#时间l": "timel",
          "#timel": "timel",
          "#计算式": "expr",
          "#表达式": "expr",
          "#expr": "expr",
          "#rel2abs": "rel2abs",
          "#related": "related",
          "#标题组成部分": "titleparts",
          "#titleparts": "titleparts",
          "#choose": "choose",
          "#调用": "invoke",
          "#invoke": "invoke",
          "#var": "var",
          "#varexists": "varexists",
          "#var_final": "var_final",
          "#vardefine": "vardefine",
          "#vardefineecho": "vardefineecho",
          "#小工具": "widget",
          "#widget": "widget",
          "#categorytree": "categorytree",
          "#cscore": "cscore",
          "条目路径": "articlepath",
          "articlepath": "articlepath",
          "服务器": "server",
          "server": "server",
          "服务器名": "servername",
          "servername": "servername",
          "脚本路径": "scriptpath",
          "scriptpath": "scriptpath",
          "样式路径": "stylepath",
          "stylepath": "stylepath",
          "choose": "choose"
      },
      {
          "页面数": "numberofpages",
          "NUMBEROFPAGES": "numberofpages",
          "用户数": "numberofusers",
          "NUMBEROFUSERS": "numberofusers",
          "活跃用户数": "numberofactiveusers",
          "NUMBEROFACTIVEUSERS": "numberofactiveusers",
          "条目数": "numberofarticles",
          "NUMBEROFARTICLES": "numberofarticles",
          "文件数": "numberoffiles",
          "NUMBEROFFILES": "numberoffiles",
          "管理员数": "numberofadmins",
          "NUMBEROFADMINS": "numberofadmins",
          "组中用户数": "numberingroup",
          "NUMBERINGROUP": "numberingroup",
          "NUMINGROUP": "numberingroup",
          "编辑数": "numberofedits",
          "NUMBEROFEDITS": "numberofedits",
          "默认排序": "defaultsort",
          "默认排序关键字": "defaultsort",
          "默认分类排序": "defaultsort",
          "DEFAULTSORT": "defaultsort",
          "DEFAULTSORTKEY": "defaultsort",
          "DEFAULTCATEGORYSORT": "defaultsort",
          "分类中页面数": "pagesincategory",
          "PAGESINCATEGORY": "pagesincategory",
          "PAGESINCAT": "pagesincategory",
          "页面大小": "pagesize",
          "PAGESIZE": "pagesize",
          "保护级别": "protectionlevel",
          "PROTECTIONLEVEL": "protectionlevel",
          "PROTECTIONEXPIRY": "protectionexpiry",
          "名字空间等同": "namespacee",
          "NAMESPACEE": "namespacee",
          "名字空间编号": "namespacenumber",
          "NAMESPACENUMBER": "namespacenumber",
          "讨论空间": "talkspace",
          "讨论名字空间": "talkspace",
          "TALKSPACE": "talkspace",
          "讨论空间等同": "talkspacee",
          "讨论名字空间等同": "talkspacee",
          "TALKSPACEE": "talkspacee",
          "主名字空间": "subjectspace",
          "条目名字空间": "subjectspace",
          "SUBJECTSPACE": "subjectspace",
          "ARTICLESPACE": "subjectspace",
          "主名字空间等同": "subjectspacee",
          "条目名字空间等同": "subjectspacee",
          "SUBJECTSPACEE": "subjectspacee",
          "ARTICLESPACEE": "subjectspacee",
          "页名": "pagename",
          "页面名": "pagename",
          "页面名称": "pagename",
          "PAGENAME": "pagename",
          "页面名等同": "pagenamee",
          "页面名称等同": "pagenamee",
          "PAGENAMEE": "pagenamee",
          "页面全称": "fullpagename",
          "完整页面名称": "fullpagename",
          "FULLPAGENAME": "fullpagename",
          "完整页面名称等同": "fullpagenamee",
          "FULLPAGENAMEE": "fullpagenamee",
          "根页面名称": "rootpagename",
          "ROOTPAGENAME": "rootpagename",
          "根页面名称等同": "rootpagenamee",
          "ROOTPAGENAMEE": "rootpagenamee",
          "基础页面名称": "basepagename",
          "BASEPAGENAME": "basepagename",
          "基础页面名称等同": "basepagenamee",
          "BASEPAGENAMEE": "basepagenamee",
          "子页面名称": "subpagename",
          "SUBPAGENAME": "subpagename",
          "子页面名称等同": "subpagenamee",
          "SUBPAGENAMEE": "subpagenamee",
          "讨论页面名称": "talkpagename",
          "对话页面名称": "talkpagename",
          "TALKPAGENAME": "talkpagename",
          "讨论页面名称等同": "talkpagenamee",
          "对话页面名称等同": "talkpagenamee",
          "TALKPAGENAMEE": "talkpagenamee",
          "主名字空间页面名称": "subjectpagename",
          "条目页面名称": "subjectpagename",
          "SUBJECTPAGENAME": "subjectpagename",
          "ARTICLEPAGENAME": "subjectpagename",
          "主名字空间页面名称等同": "subjectpagenamee",
          "条目页面名称等同": "subjectpagenamee",
          "SUBJECTPAGENAMEE": "subjectpagenamee",
          "ARTICLEPAGENAMEE": "subjectpagenamee",
          "修订ID": "revisionid",
          "REVISIONID": "revisionid",
          "修订日": "revisionday",
          "REVISIONDAY": "revisionday",
          "修订日2": "revisionday2",
          "REVISIONDAY2": "revisionday2",
          "修订月": "revisionmonth",
          "REVISIONMONTH": "revisionmonth",
          "修订月1": "revisionmonth1",
          "REVISIONMONTH1": "revisionmonth1",
          "修订年": "revisionyear",
          "REVISIONYEAR": "revisionyear",
          "修订时间戳": "revisiontimestamp",
          "REVISIONTIMESTAMP": "revisiontimestamp",
          "修订用户": "revisionuser",
          "REVISIONUSER": "revisionuser",
          "级联来源": "cascadingsources",
          "CASCADINGSOURCES": "cascadingsources",
          "名字空间": "namespace",
          "NAMESPACE": "namespace",
          "显示标题": "displaytitle",
          "DISPLAYTITLE": "displaytitle",
          "!": "!",
          "本月": "currentmonth",
          "本月2": "currentmonth",
          "CURRENTMONTH": "currentmonth",
          "CURRENTMONTH2": "currentmonth",
          "本月1": "currentmonth1",
          "CURRENTMONTH1": "currentmonth1",
          "本月名": "currentmonthname",
          "本月名称": "currentmonthname",
          "CURRENTMONTHNAME": "currentmonthname",
          "本月名属格": "currentmonthnamegen",
          "本月名称属格": "currentmonthnamegen",
          "CURRENTMONTHNAMEGEN": "currentmonthnamegen",
          "本月简称": "currentmonthabbrev",
          "CURRENTMONTHABBREV": "currentmonthabbrev",
          "今天": "currentday",
          "CURRENTDAY": "currentday",
          "今天2": "currentday2",
          "CURRENTDAY2": "currentday2",
          "星期": "currentdayname",
          "今天名": "currentdayname",
          "今天名称": "currentdayname",
          "CURRENTDAYNAME": "currentdayname",
          "今年": "currentyear",
          "CURRENTYEAR": "currentyear",
          "当前时间": "currenttime",
          "此时": "currenttime",
          "CURRENTTIME": "currenttime",
          "当前小时": "currenthour",
          "CURRENTHOUR": "currenthour",
          "本地月": "localmonth",
          "本地月2": "localmonth",
          "LOCALMONTH": "localmonth",
          "LOCALMONTH2": "localmonth",
          "本地月1": "localmonth1",
          "LOCALMONTH1": "localmonth1",
          "本地月份名": "localmonthname",
          "LOCALMONTHNAME": "localmonthname",
          "本地月历": "localmonthnamegen",
          "LOCALMONTHNAMEGEN": "localmonthnamegen",
          "本地月缩写": "localmonthabbrev",
          "LOCALMONTHABBREV": "localmonthabbrev",
          "本地日": "localday",
          "LOCALDAY": "localday",
          "本地日2": "localday2",
          "LOCALDAY2": "localday2",
          "本地日名": "localdayname",
          "LOCALDAYNAME": "localdayname",
          "本地年": "localyear",
          "LOCALYEAR": "localyear",
          "本地时间": "localtime",
          "LOCALTIME": "localtime",
          "本地小时": "localhour",
          "LOCALHOUR": "localhour",
          "站点名称": "sitename",
          "SITENAME": "sitename",
          "本周": "currentweek",
          "CURRENTWEEK": "currentweek",
          "当前DOW": "currentdow",
          "CURRENTDOW": "currentdow",
          "本地周": "localweek",
          "LOCALWEEK": "localweek",
          "本地DOW": "localdow",
          "LOCALDOW": "localdow",
          "修订大小": "revisionsize",
          "REVISIONSIZE": "revisionsize",
          "当前版本": "currentversion",
          "CURRENTVERSION": "currentversion",
          "当前时间戳": "currenttimestamp",
          "CURRENTTIMESTAMP": "currenttimestamp",
          "本地时间戳": "localtimestamp",
          "LOCALTIMESTAMP": "localtimestamp",
          "方向标记": "directionmark",
          "DIRECTIONMARK": "directionmark",
          "DIRMARK": "directionmark",
          "内容语言": "contentlanguage",
          "CONTENTLANGUAGE": "contentlanguage",
          "CONTENTLANG": "contentlanguage",
          "PAGELANGUAGE": "pagelanguage"
      }
  ],
  "urlProtocols": "bitcoin\\:|ftp\\:\\/\\/|ftps\\:\\/\\/|geo\\:|git\\:\\/\\/|gopher\\:\\/\\/|http\\:\\/\\/|https\\:\\/\\/|irc\\:\\/\\/|ircs\\:\\/\\/|magnet\\:|mailto\\:|mms\\:\\/\\/|news\\:|nntp\\:\\/\\/|redis\\:\\/\\/|sftp\\:\\/\\/|sip\\:|sips\\:|sms\\:|ssh\\:\\/\\/|svn\\:\\/\\/|tel\\:|telnet\\:\\/\\/|urn\\:|worldwind\\:\\/\\/|xmpp\\:|\\/\\/",
  "linkTrailCharacters": "/^()(.*)$/sD"
}

export default mwConfig