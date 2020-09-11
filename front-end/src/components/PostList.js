import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import axios from 'axios';

// import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 1000,
        height: 900,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

function PostList() {
    const classes = useStyles();

    var tileData = [
        {
            Create_at: "",
            Location: "hoge",
            Post_url: "http://localhost:9000/mybucket/hoge.jpg",
            Title: "hoge",
            User_id: "",
        },
        {
            Create_at: "",
            Location: "hoge",
            Post_url: "http://localhost:9000/mybucket/hoge.jpg",
            Title: "hoge",
            User_id: "",
        },
        {
            Create_at: "",
            Location: "hoge",
            Post_url: "http://localhost:9000/mybucket/hoge.jpg",
            Title: "hoge",
            User_id: "hoe",
        },
        {
            Create_at: "",
            Location: "hoge",
            Post_url: "http://localhost:9000/mybucket/hoge.jpg",
            Title: "hoge",
            User_id: "hoge",
        },
        {
            Create_at: "",
            Location: "hoge",
            Post_url: "http://localhost:9000/mybucket/hoge.jpg",
            Title: "hoge",
            User_id: "hoge",
        }
    ];
    // const [tileData, setPost] = useState({
    //     Create_at: "",
    //     Location: "hoge",
    //     Post_url: "http://localhost:9000/mybucket/hoge.jpg",
    //     Title: "hoge",
    //     User_id: "hoge",
    // });


    useEffect(() => {
        axios
            .get(`${'http://localhost:3001/getPost'}`)
            .then(results => {
                // setPost(results.data)
                console.log(results.data);
            })
    });


    // var list = tileData.map(function (tile) {

    // });

    const [count, setCount] = useState(0);
    const [isRed, setIsRed] = useState(false);
    return (

        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">投稿一覧</ListSubheader>
                </GridListTile>
                {tileData.map((tile) => (
                    <GridListTile key={tile.Post_url}>
                        <img src={tile.Post_url} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>by: {tile.Title}</span>}
                            actionIcon={
                                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}

            </GridList>
            <div
                style={isRed ? { color: 'red' } : null}
                onClick={() => {
                    setCount(count + 1);
                    setIsRed((count + 1) % 3 === 0);
                }}
            >
                {count}
            </div>

        </div>

    );
}

export default PostList;