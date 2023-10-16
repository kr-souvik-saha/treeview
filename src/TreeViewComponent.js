import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { useEffect, useState } from "react";
import { getData } from "./APIs/treeAPI";

export default function RichObjectTreeView() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchApinSetData() {
      const response = await getData();
      if (response) {
        if (response.status && response.status === 200) {
          setData(response.data);
        }
      }
    }

    fetchApinSetData();
  }, []);

  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <Box sx={{ minHeight: 110, flexGrow: 1, maxWidth: 300 }}>
      <TreeView
        aria-label="rich object"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpanded={["root"]}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {renderTree(data)}
      </TreeView>
    </Box>
  );
}
