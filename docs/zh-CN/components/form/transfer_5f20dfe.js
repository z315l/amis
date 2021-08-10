amis.define('docs/zh-CN/components/form/transfer.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Transfer 穿梭器",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "Transfer 穿梭器",
    "icon": null,
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"label\": \"默认\",\n      \"type\": \"transfer\",\n      \"name\": \"transfer\",\n      \"options\": [\n        {\n          \"label\": \"诸葛亮\",\n          \"value\": \"zhugeliang\"\n        },\n        {\n          \"label\": \"曹操\",\n          \"value\": \"caocao\"\n        },\n        {\n          \"label\": \"钟无艳\",\n          \"value\": \"zhongwuyan\"\n        },\n        {\n          \"label\": \"李白\",\n          \"value\": \"libai\"\n        },\n        {\n          \"label\": \"韩信\",\n          \"value\": \"hanxin\"\n        },\n        {\n          \"label\": \"云中君\",\n          \"value\": \"yunzhongjun\"\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%95%E7%A4%BA%E6%A8%A1%E5%BC%8F\" href=\"#%E5%B1%95%E7%A4%BA%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>展示模式</h2><h3><a class=\"anchor\" name=\"%E5%88%86%E7%BB%84\" href=\"#%E5%88%86%E7%BB%84\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>分组</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"label\": \"分组\",\n      \"type\": \"transfer\",\n      \"name\": \"transfer\",\n      \"options\": [\n        {\n          \"label\": \"法师\",\n          \"children\": [\n            {\n              \"label\": \"诸葛亮\",\n              \"value\": \"zhugeliang\"\n            }\n          ]\n        },\n        {\n          \"label\": \"战士\",\n          \"children\": [\n            {\n              \"label\": \"曹操\",\n              \"value\": \"caocao\"\n            },\n            {\n              \"label\": \"钟无艳\",\n              \"value\": \"zhongwuyan\"\n            }\n          ]\n        },\n        {\n          \"label\": \"打野\",\n          \"children\": [\n            {\n              \"label\": \"李白\",\n              \"value\": \"libai\"\n            },\n            {\n              \"label\": \"韩信\",\n              \"value\": \"hanxin\"\n            },\n            {\n              \"label\": \"云中君\",\n              \"value\": \"yunzhongjun\"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E8%A1%A8%E6%A0%BC%E6%A8%A1%E5%BC%8F\" href=\"#%E8%A1%A8%E6%A0%BC%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>表格模式</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"label\": \"表格形式\",\n      \"type\": \"transfer\",\n      \"name\": \"transfer\",\n      \"selectMode\": \"table\",\n      \"columns\": [\n        {\n          \"name\": \"label\",\n          \"label\": \"英雄\"\n        },\n        {\n          \"name\": \"position\",\n          \"label\": \"位置\"\n        }\n      ],\n      \"options\": [\n        {\n          \"label\": \"诸葛亮\",\n          \"value\": \"zhugeliang\",\n          \"position\": \"中单\"\n        },\n        {\n          \"label\": \"曹操\",\n          \"value\": \"caocao\",\n          \"position\": \"上单\"\n        },\n        {\n          \"label\": \"钟无艳\",\n          \"value\": \"zhongwuyan\",\n          \"position\": \"上单\"\n        },\n        {\n          \"label\": \"李白\",\n          \"value\": \"libai\",\n          \"position\": \"打野\"\n        },\n        {\n          \"label\": \"韩信\",\n          \"value\": \"hanxin\",\n          \"position\": \"打野\"\n        },\n        {\n          \"label\": \"云中君\",\n          \"value\": \"yunzhongjun\",\n          \"position\": \"打野\"\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E6%A0%91%E5%BD%A2%E6%A8%A1%E5%BC%8F\" href=\"#%E6%A0%91%E5%BD%A2%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>树形模式</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"label\": \"树型展示\",\n      \"type\": \"transfer\",\n      \"name\": \"transfer4\",\n      \"selectMode\": \"tree\",\n      \"options\": [\n        {\n          \"label\": \"法师\",\n          \"children\": [\n            {\n              \"label\": \"诸葛亮\",\n              \"value\": \"zhugeliang\"\n            }\n          ]\n        },\n        {\n          \"label\": \"战士\",\n          \"children\": [\n            {\n              \"label\": \"曹操\",\n              \"value\": \"caocao\"\n            },\n            {\n              \"label\": \"钟无艳\",\n              \"value\": \"zhongwuyan\"\n            }\n          ]\n        },\n        {\n          \"label\": \"打野\",\n          \"children\": [\n            {\n              \"label\": \"李白\",\n              \"value\": \"libai\"\n            },\n            {\n              \"label\": \"韩信\",\n              \"value\": \"hanxin\"\n            },\n            {\n              \"label\": \"云中君\",\n              \"value\": \"yunzhongjun\"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E7%BA%A7%E8%81%94%E9%80%89%E6%8B%A9\" href=\"#%E7%BA%A7%E8%81%94%E9%80%89%E6%8B%A9\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>级联选择</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"label\": \"级联选择\",\n      \"type\": \"transfer\",\n      \"name\": \"transfer5\",\n      \"selectMode\": \"chained\",\n      \"options\": [\n        {\n          \"label\": \"法师\",\n          \"children\": [\n            {\n              \"label\": \"诸葛亮\",\n              \"value\": \"zhugeliang\"\n            }\n          ]\n        },\n        {\n          \"label\": \"战士\",\n          \"children\": [\n            {\n              \"label\": \"曹操\",\n              \"value\": \"caocao\"\n            },\n            {\n              \"label\": \"钟无艳\",\n              \"value\": \"zhongwuyan\"\n            }\n          ]\n        },\n        {\n          \"label\": \"打野\",\n          \"children\": [\n            {\n              \"label\": \"李白\",\n              \"value\": \"libai\"\n            },\n            {\n              \"label\": \"韩信\",\n              \"value\": \"hanxin\"\n            },\n            {\n              \"label\": \"云中君\",\n              \"value\": \"yunzhongjun\"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E6%94%AF%E6%8C%81%E6%90%9C%E7%B4%A2\" href=\"#%E6%94%AF%E6%8C%81%E6%90%9C%E7%B4%A2\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>支持搜索</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"label\": \"带搜索\",\n      \"type\": \"transfer\",\n      \"name\": \"transfer6\",\n      \"selectMode\": \"chained\",\n      \"searchable\": true,\n      \"sortable\": true,\n      \"options\": [\n        {\n          \"label\": \"法师\",\n          \"children\": [\n            {\n              \"label\": \"诸葛亮\",\n              \"value\": \"zhugeliang\"\n            }\n          ]\n        },\n        {\n          \"label\": \"战士\",\n          \"children\": [\n            {\n              \"label\": \"曹操\",\n              \"value\": \"caocao\"\n            },\n            {\n              \"label\": \"钟无艳\",\n              \"value\": \"zhongwuyan\"\n            }\n          ]\n        },\n        {\n          \"label\": \"打野\",\n          \"children\": [\n            {\n              \"label\": \"李白\",\n              \"value\": \"libai\"\n            },\n            {\n              \"label\": \"韩信\",\n              \"value\": \"hanxin\"\n            },\n            {\n              \"label\": \"云中君\",\n              \"value\": \"yunzhongjun\"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E5%BB%B6%E6%97%B6%E5%8A%A0%E8%BD%BD\" href=\"#%E5%BB%B6%E6%97%B6%E5%8A%A0%E8%BD%BD\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>延时加载</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"label\": \"延时加载\",\n      \"type\": \"transfer\",\n      \"name\": \"transfer7\",\n      \"selectMode\": \"tree\",\n      \"deferApi\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/deferOptions?label=${label}\",\n      \"options\": [\n        {\n          \"label\": \"法师\",\n          \"children\": [\n            {\n              \"label\": \"诸葛亮\",\n              \"value\": \"zhugeliang\"\n            }\n          ]\n        },\n        {\n          \"label\": \"战士\",\n          \"defer\": true\n        },\n        {\n          \"label\": \"打野\",\n          \"children\": [\n            {\n              \"label\": \"李白\",\n              \"value\": \"libai\"\n            },\n            {\n              \"label\": \"韩信\",\n              \"value\": \"hanxin\"\n            },\n            {\n              \"label\": \"云中君\",\n              \"value\": \"yunzhongjun\"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E5%85%B3%E8%81%94%E9%80%89%E6%8B%A9%E6%A8%A1%E5%BC%8F\" href=\"#%E5%85%B3%E8%81%94%E9%80%89%E6%8B%A9%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>关联选择模式</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"label\": \"关联选择模式\",\n      \"type\": \"transfer\",\n      \"name\": \"b\",\n      \"sortable\": true,\n      \"searchable\": true,\n      \"deferApi\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/deferOptions?label=${label}\",\n      \"selectMode\": \"associated\",\n      \"leftMode\": \"tree\",\n      \"leftOptions\": [\n        {\n          \"label\": \"法师\",\n          \"children\": [\n            {\n              \"label\": \"诸葛亮\",\n              \"value\": \"zhugeliang\"\n            }\n          ]\n        },\n        {\n          \"label\": \"战士\",\n          \"children\": [\n            {\n              \"label\": \"曹操\",\n              \"value\": \"caocao\"\n            },\n            {\n              \"label\": \"钟无艳\",\n              \"value\": \"zhongwuyan\"\n            }\n          ]\n        },\n        {\n          \"label\": \"打野\",\n          \"children\": [\n            {\n              \"label\": \"李白\",\n              \"value\": \"libai\"\n            },\n            {\n              \"label\": \"韩信\",\n              \"value\": \"hanxin\"\n            },\n            {\n              \"label\": \"云中君\",\n              \"value\": \"yunzhongjun\"\n            }\n          ]\n        }\n      ],\n      \"options\": [\n        {\n          \"ref\": \"zhugeliang\",\n          \"children\": [\n            {\n              \"label\": \"A\",\n              \"value\": \"a\"\n            }\n          ]\n        },\n        {\n          \"ref\": \"caocao\",\n          \"children\": [\n            {\n              \"label\": \"B\",\n              \"value\": \"b\"\n            },\n\n            {\n              \"label\": \"C\",\n              \"value\": \"c\"\n            }\n          ]\n        },\n        {\n          \"ref\": \"zhongwuyan\",\n          \"children\": [\n            {\n              \"label\": \"D\",\n              \"value\": \"d\"\n            },\n\n            {\n              \"label\": \"E\",\n              \"value\": \"e\"\n            }\n          ]\n        },\n        {\n          \"ref\": \"libai\",\n          \"defer\": true\n        },\n        {\n          \"ref\": \"hanxin\",\n          \"defer\": true\n        },\n        {\n          \"ref\": \"yunzhongjun\",\n          \"defer\": true\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"searchapi\" href=\"#searchapi\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>searchApi</h2><p><strong>发送</strong></p>\n<p>默认 GET，携带 term 变量，值为搜索框输入的文字，可从上下文中取数据设置进去。</p>\n<p><strong>响应</strong></p>\n<p>格式要求如下：</p>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"status\"</span><span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"msg\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"data\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"options\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"label\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"描述\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"value\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"值\"</span> <span class=\"token comment\">// ,</span>\n        <span class=\"token comment\">// \"children\": [] // 可以嵌套</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"label\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"描述2\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"value\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"值2\"</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n\n    <span class=\"token property\">\"value\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"值\"</span> <span class=\"token comment\">// 默认值，可以获取列表的同时设置默认值。</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<p>适用于需选择的数据/信息源较多时，用户可直观的知道自己所选择的数据/信息的场景，一般左侧框为数据/信息源，右侧为已选数据/信息，被选中信息同时存在于 2 个框内。</p>\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><p>除了支持 <a href=\"./formitem#%E5%B1%9E%E6%80%A7%E8%A1%A8\">普通表单项属性表</a> 中的配置以外，还支持下面一些配置</p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>options</td>\n<td><code>Array&lt;object&gt;</code>或<code>Array&lt;string&gt;</code></td>\n<td></td>\n<td><a href=\"./options#%E9%9D%99%E6%80%81%E9%80%89%E9%A1%B9%E7%BB%84-options\">选项组</a></td>\n</tr>\n<tr>\n<td>source</td>\n<td><code>string</code>或 <a href=\"../../../docs/types/api\">API</a></td>\n<td></td>\n<td><a href=\"./options#%E5%8A%A8%E6%80%81%E9%80%89%E9%A1%B9%E7%BB%84-source\">动态选项组</a></td>\n</tr>\n<tr>\n<td>delimeter</td>\n<td><code>string</code></td>\n<td><code>false</code></td>\n<td><a href=\"./options#%E6%8B%BC%E6%8E%A5%E7%AC%A6-delimiter\">拼接符</a></td>\n</tr>\n<tr>\n<td>joinValues</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td><a href=\"./options#%E6%8B%BC%E6%8E%A5%E5%80%BC-joinvalues\">拼接值</a></td>\n</tr>\n<tr>\n<td>extractValue</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td><a href=\"./options#%E6%8F%90%E5%8F%96%E5%A4%9A%E9%80%89%E5%80%BC-extractvalue\">提取值</a></td>\n</tr>\n<tr>\n<td>searchable</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>当设置为 <code>true</code> 时表示可以通过输入部分内容检索出选项。</td>\n</tr>\n<tr>\n<td>searchApi</td>\n<td><a href=\"../../../docs/types/api\">API</a></td>\n<td></td>\n<td>如果想通过接口检索，可以设置个 api。</td>\n</tr>\n<tr>\n<td>statistics</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>是否显示统计数据</td>\n</tr>\n<tr>\n<td>selectTitle</td>\n<td><code>string</code></td>\n<td><code>&quot;请选择&quot;</code></td>\n<td>左侧的标题文字</td>\n</tr>\n<tr>\n<td>resultTitle</td>\n<td><code>string</code></td>\n<td><code>&quot;当前选择&quot;</code></td>\n<td>右侧结果的标题文字</td>\n</tr>\n<tr>\n<td>sortable</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>结果可以进行拖拽排序</td>\n</tr>\n<tr>\n<td>selectMode</td>\n<td><code>string</code></td>\n<td><code>list</code></td>\n<td>可选：<code>list</code>、<code>table</code>、<code>tree</code>、<code>chained</code>、<code>associated</code>。分别为：列表形式、表格形式、树形选择形式、级联选择形式，关联选择形式（与级联选择的区别在于，级联是无限极，而关联只有一级，关联左边可以是个 tree）。</td>\n</tr>\n<tr>\n<td>searchResultMode</td>\n<td><code>string</code></td>\n<td></td>\n<td>如果不设置将采用 <code>selectMode</code> 的值，可以单独配置，参考 <code>selectMode</code>，决定搜索结果的展示形式。</td>\n</tr>\n<tr>\n<td>columns</td>\n<td><code>Array&lt;Object&gt;</code></td>\n<td></td>\n<td>当展示形式为 <code>table</code> 可以用来配置展示哪些列，跟 table 中的 columns 配置相似，只是只有展示功能。</td>\n</tr>\n<tr>\n<td>leftOptions</td>\n<td><code>Array&lt;Object&gt;</code></td>\n<td></td>\n<td>当展示形式为 <code>associated</code> 时用来配置左边的选项集。</td>\n</tr>\n<tr>\n<td>leftMode</td>\n<td><code>string</code></td>\n<td></td>\n<td>当展示形式为 <code>associated</code> 时用来配置左边的选择形式，支持 <code>list</code> 或者 <code>tree</code>。默认为 <code>list</code>。</td>\n</tr>\n<tr>\n<td>rightMode</td>\n<td><code>string</code></td>\n<td></td>\n<td>当展示形式为 <code>associated</code> 时用来配置右边的选择形式，可选：<code>list</code>、<code>table</code>、<code>tree</code>、<code>chained</code>。</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "展示模式",
          "fragment": "%E5%B1%95%E7%A4%BA%E6%A8%A1%E5%BC%8F",
          "fullPath": "#%E5%B1%95%E7%A4%BA%E6%A8%A1%E5%BC%8F",
          "level": 2,
          "children": [
            {
              "label": "分组",
              "fragment": "%E5%88%86%E7%BB%84",
              "fullPath": "#%E5%88%86%E7%BB%84",
              "level": 3
            },
            {
              "label": "表格模式",
              "fragment": "%E8%A1%A8%E6%A0%BC%E6%A8%A1%E5%BC%8F",
              "fullPath": "#%E8%A1%A8%E6%A0%BC%E6%A8%A1%E5%BC%8F",
              "level": 3
            },
            {
              "label": "树形模式",
              "fragment": "%E6%A0%91%E5%BD%A2%E6%A8%A1%E5%BC%8F",
              "fullPath": "#%E6%A0%91%E5%BD%A2%E6%A8%A1%E5%BC%8F",
              "level": 3
            },
            {
              "label": "级联选择",
              "fragment": "%E7%BA%A7%E8%81%94%E9%80%89%E6%8B%A9",
              "fullPath": "#%E7%BA%A7%E8%81%94%E9%80%89%E6%8B%A9",
              "level": 3
            },
            {
              "label": "支持搜索",
              "fragment": "%E6%94%AF%E6%8C%81%E6%90%9C%E7%B4%A2",
              "fullPath": "#%E6%94%AF%E6%8C%81%E6%90%9C%E7%B4%A2",
              "level": 3
            },
            {
              "label": "延时加载",
              "fragment": "%E5%BB%B6%E6%97%B6%E5%8A%A0%E8%BD%BD",
              "fullPath": "#%E5%BB%B6%E6%97%B6%E5%8A%A0%E8%BD%BD",
              "level": 3
            },
            {
              "label": "关联选择模式",
              "fragment": "%E5%85%B3%E8%81%94%E9%80%89%E6%8B%A9%E6%A8%A1%E5%BC%8F",
              "fullPath": "#%E5%85%B3%E8%81%94%E9%80%89%E6%8B%A9%E6%A8%A1%E5%BC%8F",
              "level": 3
            }
          ]
        },
        {
          "label": "searchApi",
          "fragment": "searchapi",
          "fullPath": "#searchapi",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
