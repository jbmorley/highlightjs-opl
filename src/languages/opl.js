/*
Language: OPL
Author: Jason Morley <hello@jbmorley.co.uk>
Description: Psion OPL language definition.
Website: https://github.com/jbmorley/highlightjs-opl
*/
export default function(hljs) {
    return {
        name: "OPL",
        case_insensitive: true,
        keywords: {
            $pattern: /[a-z$&%:]+/,
            keyword: 'abs acos acs addr adjustalloc alert alias alloc alog and app append appendsprite asc asin asn at atan atn back beep begintrans bookmark break busy byref cache cachehdr cacherec cachetidy call cancel changesprite chr$ clearflags clock close closesprite cls cmd$ committrans compact compress const continue copy copyw cos cosh count create createsprite cursor datetosecs datim$ day dayname$ days daystodate dbuttons dcheckbox dchoice ddate declare declare external dedit deditmulti defaultwin deg delete deletew dfile dfloat dialog diaminit diampos dinit dinits dir$ dirw$ disp dlong do dow dposition drawsprite dtext dtime dxinput edit else elseif end enda endif endp endv endwh eng entersend entersend0 eof erase err err$ errx$ escape eval exist exp external fac find findfield findlib findw first fix fix$ flt font free freealloc gat gborder gbox gbutton gcircle gclock gclose gcls gcolor gcolorbackground gcolorinfo gcopy gcreate gcreatebit gdrawobject gellipse gen$ get get$ getcmd$ getdoc$ getevent getevent32 geteventa32 geteventc getkey getlibh gfill gfont ggmode ggrey gheight gidentity ginfo ginfo32 ginvert giprint glineby glineto gloadbit gloadfont global gmove gorder goriginx goriginy goto gotomark gpatt gpeekline gpixel gpoly gprint gprintb gprintclip grank gsavebit gscroll gsetpenwidth gsetwin gstyle gtmode gtwidth gunloadfont gupdate guse gvisible gwidth gx gxborder gxborder32 gxprint gy hex$ hour iabs if in include input insert int intf intrans ioa ioc iocancel ioclose ioopen ioread ioseek iosignal iow iowait iowaitstat iowaitstat32 iowrite ioyield key key$ keya keyc killmark kmod kstat last lclose left$ len lenalloc linklib ln loadlib loadm loc local lock log lopen lower$ lprint m0 m1 m2 m3 m4 m5 m6 m7 m8 m9 max mcard mcardx mcasc mean menu menun mid$ min minit minute mkdir mod modify month month$ mpopup newobj newobjh next not num$ odbinfo off onerr open openr opx or os out p1 p2 p3 p4 p5 parse$ pause peek$ peekb peekf peekl peekw pi pointerfilter poke$ pokeb pokef pokel pokew pos position possprite print proc put rad raise rand randomize realloc recall recsize rename rept$ return right$ rmdir rnd rollback round sci$ screen screeninfo second secstodate send setdoc setflags sethelp sethelpuid setname setpath sgn showhelp sin sinh size space sqr sqrt statuswin statwininfo std stdev stop store style sum tan tanh testevent trap uadd udg unloadlib unloadm until update upper$ use usesprite usr usr$ usub val var vector view week while year'
        },
        contains: [
            {
                className: 'string',
                begin: '"',
                end: '"'
            },
            hljs.COMMENT(
                'REM',
                '\n',
                {
                    contains: [
                        {
                            className: 'doc',
                            begin: '@\\w+'
                        }
                    ]
                }
            )
        ]
    } 
}
