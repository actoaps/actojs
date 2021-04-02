const { isText } = require('istextorbinary')

exports.onCreateNode = async function ({ node, loadNodeContent, actions }) {
    if (node.internal.type !== 'File' || !isText(node.absolutePath)) {
        return
    }

    const content = await loadNodeContent(node)

    const { createNodeField } = actions

    createNodeField({
        node,
        name: 'content',
        value: content
    })
}


