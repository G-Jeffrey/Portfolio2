import React from 'react';
import { createStyles, Container, Group, ActionIcon } from '@mantine/core';
import { BrandGithub, BrandYoutube, BrandLinkedin, BrandApple } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: 0,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
            }`,
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
        },
    },

    links: {
        [theme.fn.smallerThan('xs')]: {
            marginTop: theme.spacing.md,
        },
    },
}));

export const Footer = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <BrandApple />
                <Group spacing={0} className={classes.links} position="right" noWrap>
                    <a href="https://www.linkedin.com/in/jeffrey-guan-3502a9153/">
                        <ActionIcon size="lg">
                            <BrandLinkedin size={18} />
                        </ActionIcon>
                    </a>
                    <a href="https://github.com/G-Jeffrey">
                        <ActionIcon size="lg">
                            <BrandGithub size={18} />
                        </ActionIcon>
                    </a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <ActionIcon size="lg">
                            <BrandYoutube size={18} />
                        </ActionIcon>
                    </a>
                </Group>
            </Container>
        </div>
    );
}