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
            img: "http://localhost:9000/mybucket/hoge.jpg",

        },
        {
            img: "http://localhost:9000/mybucket/hoge.jpg",

        },
        {
            img: "http://localhost:9000/mybucket/hoge.jpg",

        },
        {
            img: "http://localhost:9000/mybucket/hoge.jpg",

        },
        {
            img: "http://localhost:9000/mybucket/hoge.jpg",

        },
        {
            img: "http://localhost:9000/mybucket/hoge.jpg",

        },
        {
            img: "http://localhost:9000/mybucket/hoge.jpg",

        },
        {
            img: "http://localhost:9000/mybucket/hoge.jpg",

        },
    ];

    // const userName = 'reo777';
    const getProfile = async () => {
        try {
            //ここでGETメソッドを使用してgithubのプロフィールを取得します。
            const result = await axios.get(
                `${'http://localhost:3001/getPost'}`
            );
            console.log(result);
        } catch (error) {
            //ここでリクエストに失敗した時の処理、メッセージを記述します。
            console.log('error!!');
        }
    };
    useEffect(() => {
        getProfile()
    });





    return (

        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">投稿一覧</ListSubheader>
                </GridListTile>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>by: {tile.author}</span>}
                            actionIcon={
                                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>

            <div>
                <button onClick={() => getProfile()}>get profile!</button>
            </div>
        </div>

    );
}

export default PostList;